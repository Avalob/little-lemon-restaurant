import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import "./footer.css";
import logoWhiteImage from "../assets/logo-white.png";

const contacts = [
  { icon: faLocationDot, info: "Calle Falsa 123, Alcalá de Henares, Madrid" },
  { icon: faPhone, info: "+34 666926010" },
  { icon: faEnvelope, info: "andreavallob22@gmail.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook", url: "https://facebook.com/" },
  { icon: faInstagram, name: "instagram", url: "https://instagram.com/" },
  { icon: faLinkedin, name: "linkedin", url: "https://linkedin.com/company/" },
];

const currentYear = new Date().getFullYear();

const Footer = ({ navLinks }) => {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img
          className="site-footer-logo"
          src={logoWhiteImage}
          alt="Pequeño Limón"
        />
      </div>

      <nav className="site-footer-nav">
        <h4>Navegación</h4>
        <ul>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <HashLink to={navLink.path}>{navLink.name}</HashLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="site-footer-contact">
        <h4>Contacto</h4>
        <address>
          {contacts.map((contact, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          ))}
        </address>
      </div>

      <div className="site-footer-social">
        <h4>Síguenos</h4>
        <div className="social-links">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Síguenos en ${social.name}`}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="site-footer-copyright">
        <p className="copyright">
          &copy; {currentYear} Pequeño Limón - Restaurante Mediterráneo. 
          Proyecto académico desarrollado por{' '}
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/avalob"
          >
            Avalob
          </a>
          . Fines educativos únicamente.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
