import React, { useState, useEffect } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useTheme } from "../context/ThemeContext";
import "../navbar.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
  { href: "/Joshua Tite CV - Copy.docx", label: "Resume", download: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href) => href.startsWith("#") && activeId === href.slice(1);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          JGT
        </a>
        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
        </button>
        <div className="navbar-right">
          <button
            type="button"
            className="navbar-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
            {NAV_LINKS.map(({ href, label, download, external }) => (
              <li key={href + label}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={isActive(href) ? "active" : ""}
                  {...(download ? { download: true } : {})}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
