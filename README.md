🏆 Turnieje App

Pełnostackowa aplikacja internetowa do zarządzania turniejami

📖 Spis treści

Opis Projektu

Główne Funkcjonalności

Struktura Katalogów

Instrukcja Uruchomienia

Zrzuty Ekranu

Autor

🎯 Opis Projektu

Projekt to pełnostackowa (full-stack) aplikacja internetowa służąca do kompleksowego zarządzania turniejami. Została zaprojektowana z wykorzystaniem nowoczesnych narzędzi, zapewniając podział na serwer (backend) obsługujący bazę danych oraz responsywny interfejs użytkownika (frontend).

✨ Główne Funkcjonalności

Strona Główna (Home.jsx): Ekran powitalny, przegląd działania aplikacji i najważniejszych informacji.

Autoryzacja (Login.jsx): Bezpieczny system logowania i zarządzania sesją użytkowników.

Panel Profilu (Profile.jsx): Miejsce do zarządzania swoimi danymi i preferencjami.

Zarządzanie Turniejami (Tournaments.jsx): Rdzeń aplikacji pozwalający na przeglądanie, tworzenie oraz edycję turniejów.

🗂️ Struktura Katalogów

Architektura projektu została podzielona na dwa niezależne środowiska:

turnieje-app/
├── backend/                # Logika API i połączenie z bazą danych
│   ├── prisma/             # Schematy bazy danych (schema.prisma)
│   ├── index.js            # Główny plik serwera
│   └── .env                # Zmienne środowiskowe (np. DATABASE_URL)
│
└── frontend/               # Aplikacja kliencka React
    ├── src/
    │   ├── assets/         # Zasoby statyczne (grafiki, ikony)
    │   ├── Components/     # Komponenty wielokrotnego użytku
    │   ├── pages/          # Główne widoki (Routing)
    │   ├── App.jsx         # Konfiguracja ścieżek aplikacji
    │   └── main.jsx        # Punkt wejściowy React
    └── vite.config.js      # Konfiguracja środowiska Vite


🚀 Instrukcja Uruchomienia dla Wykładowcy

Aby poprawnie przetestować aplikację w środowisku lokalnym, należy uruchomić oddzielnie backend oraz frontend.

Wymagania wstępne: Zainstalowany Node.js oraz dostęp do bazy danych.

1️⃣ Uruchomienie Backendu

Otwórz terminal w głównym folderze projektu i wykonaj poniższe kroki:

# 1. Przejdź do folderu backendu
cd backend

# 2. Zainstaluj wymagane zależności
npm install

# 3. Uzupełnij zmienne środowiskowe (skonfiguruj plik .env podając DATABASE_URL)

# 4. Wygeneruj klienta Prisma i zsynchronizuj schemat z bazą danych
npx prisma generate
npx prisma db push

# 5. Uruchom serwer API
node index.js


Serwer uruchomi się na domyślnym porcie (np. http://localhost:3000).

2️⃣ Uruchomienie Frontendu

W nowym oknie terminala przejdź do folderu frontendu i uruchom aplikację kliencką:

# 1. Przejdź do folderu frontendu
cd frontend

# 2. Zainstaluj zależności
npm install

# 3. Uruchom serwer deweloperski
npm run dev


Aplikacja będzie dostępna w przeglądarce pod adresem: http://localhost:5173

📸 Zrzuty Ekranu

(Miejsce na wstawienie zrzutów ekranu – aby dodać grafikę na GitHubie, wystarczy przeciągnąć obrazek w to miejsce podczas edycji pliku)

👨‍🎓 Autor

Imię i Nazwisko: [Twoje Imię i Nazwisko]

Numer Indeksu: [Twój numer indeksu]

Kierunek / Grupa: Informatyka / [Numer grupy]
