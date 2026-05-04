import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="brand">
        <div className="mark">
          <div className="glyph" />
        </div>

        <Link to="/">
          <span>Skild</span>
        </Link>
      </div>

      {/* LOG IN */}
      <div className="actions">
        <Link to="/sign-in/$" className="btn-primary">
          <LogIn className="icon" />
          Sign In
        </Link>
      </div>
    </nav>
  );
}
