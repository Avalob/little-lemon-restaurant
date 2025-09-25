import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "Inicio",
      path: "/#",
      hashLink: true,
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
      path: "/orderOnline",
      hashLink: false,
    },
    {
      name: "Iniciar Sesión",
      path: "/login",
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
