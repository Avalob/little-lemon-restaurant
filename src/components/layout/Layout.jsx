import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "Inicio",
      path: "/",
      hashLink: false,
    },
    {
      name: "Sobre Nosotros",
      path: "/#about",
      hashLink: true,
    },
    {
      name: "Menú",
      path: "/#menu",
      hashLink: true,
    },
    {
      name: "Reservas",
      path: "/reservations",
      hashLink: false,
    },
    {
      name: "Pedir en Línea",
      path: "/#menu",
      hashLink: true,
    },
    {
      name: "Iniciar Sesión",
      path: "/reservations",
      hashLink: false,
    },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <main id="home">{children}</main>
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;
