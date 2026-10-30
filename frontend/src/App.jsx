// frontend/src/App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  // Stan przechowujący nick zalogowanego użytkownika
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // 1. Sprawdzamy, czy w adresie URL przeglądarki znajduje się "?token=..."
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      // 2. Jeśli jest, chowamy go głęboko do pamięci przeglądarki (Local Storage)
      localStorage.setItem('token', token);
      // 3. Czyścimy pasek adresu, żeby strona ładnie wyglądała
      window.history.replaceState({}, document.title, "/"); 
    }

    // 4. Sprawdzamy, czy mamy zapisany bilet w pamięci (np. po odświeżeniu strony)
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      // Szybki trik programistyczny na odczytanie danych (payload) ze środka biletu JWT
      const payload = JSON.parse(atob(savedToken.split('.')[1]));
      setUsername(payload.username); // Ustawiamy nick w Reakcie!
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app-shell">
        {/* Przekazujemy nick do Navbara, żeby mógł wyświetlić powitanie */}
        <Navbar username={username} /> 
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/turnieje" element={<Tournaments />} />
            <Route path="/profil" element={<Profile username={username} />} />
            <Route path="/zaloguj" element={<Login />} />
          </Routes>
        </main>
        <footer className="site-footer">Jakub Burc · 127606</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;