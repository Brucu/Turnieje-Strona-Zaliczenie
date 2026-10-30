// backend/index.js
require('dotenv').config(); // Ładuje zmienne środowiskowe z pliku .env
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// CORS pozwala naszej stronie (React na porcie 5173) na łączenie się z serwerem (port 5000) bez błędów bezpieczeństwa.
app.use(cors());
app.use(express.json());

// Nasze testowe dane przeniesione z frontendu na serwer!
const tournaments = [
    { id: 1, name: "Mistrzostwa serwera w CS2", game: "Counter-Strike 2", players: "16/32", status: "Zapisy otwarte" },
    { id: 2, name: "Nocny turniej w LoLa", game: "League of Legends", players: "8/8", status: "W trakcie" },
    { id: 3, name: "Tekken 8 - Lokalna Bitwa", game: "Tekken 8", players: "12/16", status: "Zapisy otwarte" },
    { id: 4, name: "Szachowy turniej o pietruszkę", game: "Szachy", players: "4/8", status: "Zapisy zamknięte" },
];

// Nasz pierwszy Endpoint API
// Kiedy ktoś (np. nasza strona w React) wyśle zapytanie GET pod adres /api/tournaments,
// serwer odpowie mu, wysyłając powyższą listę w formacie JSON.
app.get('/api/tournaments', (req, res) => {
    res.json(tournaments);
});

app.get('/api/auth/discord', (req, res) => {
  const url = `https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.DISCORD_REDIRECT_URI)}&response_type=code&scope=identify`;
  res.redirect(url);
});

app.get('/api/auth/discord/callback', async(req, res) => {
    const code = req.query.code;
    if (!code) return res.status(400).send('Brak kodu autoryzacyjnego');

    try {
        // KROK A: Wymieniamy kod na "Access Token"
        const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                client_id: process.env.DISCORD_CLIENT_ID,
                client_secret: process.env.DISCORD_CLIENT_SECRET,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: process.env.DISCORD_REDIRECT_URI,
            }).toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        const tokenData = await tokenResponse.json();

        // KROK B: Używając "Access Tokenu", prosimy Discorda o dane użytkownika
        const userResponse = await fetch('https://discord.com/api/users/@me', {
            headers: { Authorization: `Bearer ${tokenData.access_token}` },
        });

        const userData = await userResponse.json();

        // SUKCES! Wypisujemy dane użytkownika w terminalu backendu
        console.log("🎉 Zalogowano użytkownika:", userData.username);
        console.log("Pełne dane:", userData);

        // Na sam koniec odsyłamy użytkownika z powrotem na naszą stronę główną w React
        const token = jwt.sign({ id: userData.id, username: userData.username}, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.redirect(`http://localhost:5173/?token=${token}`);

    } catch (error) {
        console.error("Błąd podczas logowania:", error);
        res.status(500).send("Wystąpił błąd logowania");
    }
});

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Serwer backendu działa i nasłuchuje na http://localhost:${PORT}`);
});