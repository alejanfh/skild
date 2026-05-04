import { Show, UserButton } from "@clerk/tanstack-react-start";
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
        <Show when="signed-in">
          <UserButton />
        </Show>

        <Show when="signed-out">
          <Link to="/sign-in/$" className="btn-primary">
            <LogIn className="icon" />
            Sign In
          </Link>
        </Show>
      </div>
    </nav>
  );
}
