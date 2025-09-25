import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "../assets/logo.png";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = ({ navLinks }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();
  const [activePath, setActivePath] = useState(
    localStorage.getItem("activePath") || location.pathname
  );

  useEffect(() => {
    setActivePath(localStorage.getItem("activePath") || location.pathname);
  }, [location.pathname]);

  // Cerrar menú móvil con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isNavExpanded) {
        setIsNavExpanded(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isNavExpanded]);

  // Controlar scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isNavExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isNavExpanded]);

  const handleNavLinkClick = (path) => {
    setIsNavExpanded(false);
    setActivePath(path);
    localStorage.setItem("activePath", path);
  };

  return (
    <header>
      <nav className="container grid nav-bar">
        <HashLink className="nav-bar-logo" to="/">
          <img src={logoImage} alt="Little Lemon logo" />
        </HashLink>
        <button
          className={`nav-bar-hamburger ${isNavExpanded ? 'active' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>

        
        <ul
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              onClick={() => handleNavLinkClick(navLink.path)}
              aria-label="On Click"
              className={`${navLink.name === "Iniciar Sesión" ? "user-avatar" : "hover-underline-animation"} ${
                activePath === navLink.path ? "active" : ""
              }`}
            >
              {navLink.name === "Iniciar Sesión" ? (
                <Link to={navLink.path} className="avatar-link" title="Iniciar Sesión">
                  <div className="avatar-container">
                    <FontAwesomeIcon icon={faUser} className="avatar-icon" />
                  </div>
                  <span className="avatar-text">Iniciar Sesión</span>
                </Link>
              ) : navLink.hashLink ? (
                <HashLink to={navLink.path}>{navLink.name}</HashLink>
              ) : (
                <Link to={navLink.path}>{navLink.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
