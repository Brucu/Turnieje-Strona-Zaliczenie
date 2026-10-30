Aplikacja "Turnieje" (Turnieje App)

Opis Projektu

Projekt to pełnostackowa (full-stack) aplikacja internetowa służąca do zarządzania turniejami. Została podzielona na dwie główne części: serwer (backend) oraz interfejs użytkownika (frontend).

Wykorzystane Technologie

Backend

Środowisko: Node.js

Baza danych / ORM: Prisma

Zależności: Szczegóły w pliku backend/package.json

Frontend

Biblioteka: React

Narzędzie budujące: Vite

Stylowanie: CSS (główny plik index.css)

Architektura: Komponentowa, z wydzielonymi widokami (Pages: Home, Login, Profile, Tournaments).

Struktura Katalogów

Projekt składa się z dwóch głównych modułów:

turnieje-app/
├── backend/                # Logika serwerowa i połączenie z bazą danych
│   ├── prisma/             # Schematy bazy danych i konfiguracja ORM (schema.prisma)
│   ├── index.js            # Punkt wejściowy aplikacji serwerowej
│   └── .env                # Plik ze zmiennymi środowiskowymi (np. adres bazy danych)
│
└── frontend/               # Aplikacja kliencka (React + Vite)
    ├── src/
    │   ├── assets/         # Pliki statyczne (np. obrazki)
    │   ├── Components/     # Komponenty wielokrotnego użytku
    │   ├── pages/          # Główne widoki aplikacji (Strona główna, Logowanie, itp.)
    │   ├── App.jsx         # Główny komponent zarządzający routingiem
    │   └── main.jsx        # Punkt wejściowy aplikacji React
    └── vite.config.js      # Konfiguracja bundlera Vite


Instrukcja Uruchomienia dla Wykładowcy

Aby poprawnie uruchomić projekt na środowisku lokalnym, należy zainstalować wymagane zależności oraz uruchomić oba moduły (backend i frontend) w osobnych oknach terminala.

Wymagania Wstępne

Zainstalowany Node.js (zalecana wersja LTS)

Dostęp do bazy danych (zgodnie z konfiguracją w pliku .env)

Krok 1: Konfiguracja i uruchomienie Backendu

Przejdź do folderu backendu:

cd backend


Zainstaluj zależności:

npm install


Skonfiguruj plik środowiskowy .env. (Należy upewnić się, że zmienna DATABASE_URL wskazuje na poprawną bazę danych).

Wygeneruj klienta Prisma i zsynchronizuj bazę danych:

npx prisma generate
npx prisma db push


Uruchom serwer:

node index.js


(Serwer powinien domyślnie nasłuchiwać na porcie zdefiniowanym w kodzie, np. http://localhost:3000)

Krok 2: Konfiguracja i uruchomienie Frontendu

W nowym oknie terminala przejdź do folderu frontendu:

cd frontend


Zainstaluj zależności:

npm install


Uruchom serwer deweloperski Vite:

npm run dev


Aplikacja kliencka będzie dostępna w przeglądarce (zazwyczaj pod adresem http://localhost:5173).

Główne Funkcjonalności (Widoki)

Strona Główna (Home.jsx): Ekran powitalny i przegląd aplikacji.

Logowanie (Login.jsx): System autoryzacji użytkowników.

Profil (Profile.jsx): Panel zarządzania danymi zalogowanego użytkownika.

Turnieje (Tournaments.jsx): Główny moduł pozwalający na przeglądanie (i zarządzanie) turniejami.
