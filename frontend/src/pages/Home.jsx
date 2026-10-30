import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="eyebrow-dot" /> Twoja arena. Twoje zasady.</p>
                    <h1>Graj o coś<br /><span>więcej.</span></h1>
                    <p className="hero-description">
                        Znajdź turniej, zbierz ekipę i pokaż, na co Cię stać.
                        Rywalizacja zaczyna się właśnie tutaj.
                    </p>
                    <div className="hero-actions">
                        <Link to="/turnieje" className="button primary">Odkryj turnieje <span aria-hidden="true">→</span></Link>
                        <Link to="/zaloguj" className="button secondary">Dołącz do społeczności</Link>
                    </div>
                </div>
                <div className="hero-side" aria-hidden="true">
                    <div className="arena-orbit">
                        <span className="arena-trophy">♛</span>
                        <span className="orbit-label">CZAS NA GG</span>
                    </div>
                </div>
            </section>

            <section className="home-stats" aria-label="Dlaczego warto">
                <div className="stat-item">
                    <span className="stat-value">Znajdź swoją grę</span>
                    <span className="stat-label">Przeglądaj dostępne turnieje</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">Zagraj z ekipą</span>
                    <span className="stat-label">Dołącz do rywalizacji na swoich zasadach</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">Pokaż skill</span>
                    <span className="stat-label">Każdy mecz to nowa szansa</span>
                </div>
            </section>
            <p className="home-footer-note">Gotowy na kolejny mecz? Twoja następna rozgrywka już czeka.</p>
        </div>
    );
}

export default Home