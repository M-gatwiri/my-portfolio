import { useState } from "react";
import { Link } from "react-router";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      path: "",
      title: "Home",
    },
    {
      path: "services",
      title: "Services",
    },
    {
      path: "portfolio",
      title: "Projects",
    },
    {
      path: "contact",
      title: "Contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <h2 className="logo">Mercy</h2>

      {/* Hamburger button */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation links */}
      <ul className={`links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link to={link.path} onClick={closeMenu}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;

