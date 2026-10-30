// frontend/src/pages/Tournaments.jsx
import { useState, useEffect } from 'react';

function Tournaments() {
  // 1. Tworzymy stan. Na starcie 'tournaments' jest pustą tablicą ([]).
  const [tournaments, setTournaments] = useState([]);

  // 2. useEffect uruchomi się dokładnie jeden raz, gdy wejdziemy w zakładkę "Turnieje"
  useEffect(() => {
    // "Dzwonimy" pod adres naszego serwera Node.js
    fetch('http://localhost:5000/api/tournaments')
      .then((response) => response.json()) // Gdy serwer odpowie, konwertujemy odpowiedź na format JSON
      .then((data) => {
        // 3. Wrzucamy odebrane dane do naszego "pudełka" (stanu)
        setTournaments(data);
      })
      .catch((error) => {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
      });
  }, []); // Ta pusta tablica na końcu jest bardzo ważna! Oznacza "wykonaj tylko raz po załadowaniu".

  return (
    <div className="tournaments-page">
      <header className="page-heading">
        <p className="eyebrow"><span className="eyebrow-dot" /> Wybierz swoją rozgrywkę</p>
        <h1>Dostępne turnieje</h1>
        <p>Dołącz do rozgrywki, zbierz ekipę i walcz o zwycięstwo.</p>
      </header>

      {tournaments.length === 0 ? (
        <div className="loading-panel">Pobieranie turniejów z serwera...</div>
      ) : (
        <div className="tournaments-grid">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="tournament-card">
              <span className="tournament-game">{tournament.game}</span>
              <h2>{tournament.name}</h2>
              <div className="tournament-info">
                <p><strong>Gracze</strong><span>{tournament.players}</span></p>
                <p className={`status ${
                  tournament.status.toLowerCase().includes('zamknięte')
                    ? 'closed'
                    : tournament.status.toLowerCase().includes('trakcie')
                      ? 'in-progress'
                      : 'open'
                }`}>{tournament.status}</p>
              </div>
              <button className="join-btn">Dołącz do turnieju</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tournaments;