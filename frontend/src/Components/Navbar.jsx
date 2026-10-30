// frontend/src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';

function Navbar({ username }) {
  // Funkcja do wylogowywania - po prostu usuwamy bilet z pamięci i odświeżamy stronę
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-mark" aria-hidden="true">✦</span>
        <span>Turnieje<span className="logo-accent">.gg</span></span>
      </Link>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Strona główna</NavLink></li>
        <li><NavLink to="/turnieje" className={({ isActive }) => isActive ? 'active' : undefined}>Turnieje</NavLink></li>
        {username && <li><NavLink to="/profil" className={({ isActive }) => isActive ? 'active' : undefined}>Profil</NavLink></li>}
        {username ? (
          <li className="nav-user">
            <span>Hej, {username}</span>
            <button onClick={handleLogout} className="logout-btn">Wyloguj</button>
          </li>
        ) : (
          <li><NavLink to="/zaloguj" className={({ isActive }) => `nav-login${isActive ? ' active' : ''}`}>Zaloguj się</NavLink></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;