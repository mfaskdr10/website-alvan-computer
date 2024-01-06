import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";

const NavbarComp = () => {
  const [hambclick, setHambclick] = useState(false);

  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`flex justify-between items-center w-full fixed md:px-20 md:py-6 p-5 bg-white z-10 ${
          scroll ? "shadow-xl" : ""
        }`}
      >
        <div>
          <NavLink to="/" className="font-bold text-2xl">
            Alvan Computer.
          </NavLink>
        </div>
        <div className="flex gap-10 items-center justify-between">
          <div className="hidden lg:block">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className="font-medium mr-10"
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <Button classname="bg-green-900 text-white hidden md:block">
            <FontAwesomeIcon icon={faWhatsapp} size="xl" className="mr-2" />
            Hubungi Kami
          </Button>
        </div>
        <div className="md:hidden bg-slate-200 p-3 rounded-xl">
          <button onClick={() => setHambclick(!hambclick)}>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>
        </div>
      </nav>
      {hambclick ? <MenuOverlay /> : null}
    </>
  );
};

export default NavbarComp;
