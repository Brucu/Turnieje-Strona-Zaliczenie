// frontend/src/pages/Login.jsx
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-page">
      <section className="login-card">
        <div className="login-icon" aria-hidden="true">✦</div>
        <p className="eyebrow">Witaj na arenie</p>
        <h1>Dołącz do gry</h1>
        <p>Zaloguj się przez Discord, aby dołączyć do społeczności i w pełni korzystać z turniejów.</p>
        <a href="http://localhost:5000/api/auth/discord" className="button primary">
          Zaloguj przez Discord <span aria-hidden="true">→</span>
        </a>
        <Link to="/turnieje" className="button secondary login-secondary">
          Zobacz dostępne turnieje
        </Link>
      </section>
    </div>
  );
}

export default Login;