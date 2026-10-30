import { Link } from 'react-router-dom';

function Profile({ username }) {
  const isLoggedIn = Boolean(username);

  return (
    <div className="profile-hero">
      <div className="profile-card">
        <h1>{isLoggedIn ? `Witaj w swoim profilu, ${username}!` : 'Profil użytkownika'}</h1>
        <p>
          {isLoggedIn
            ? 'Tutaj możesz zobaczyć swój status, ostatnie turnieje i zarządzać kontem.'
            : 'Aby zobaczyć swój profil, musisz się zalogować. Kliknij poniżej, aby przejść do logowania.'}
        </p>

        {isLoggedIn ? (
          <div className="profile-actions">
            <Link to="/turnieje" className="button primary">Przeglądaj turnieje</Link>
            <Link to="/" className="button secondary">Powrót do strony głównej</Link>
          </div>
        ) : (
          <div className="profile-actions">
            <Link to="/zaloguj" className="button primary">Zaloguj przez Discord</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
