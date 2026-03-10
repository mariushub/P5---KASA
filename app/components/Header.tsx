import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="/logo.png" alt="Kasa" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
  );
}
