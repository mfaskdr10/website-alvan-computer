import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const MenuOverlay = () => {
  return (
    <>
      <div className="absolute top-28 right-5 w-[90%] bg-slate-100 rounded-xl">
        <div className="flex flex-col items-center p-10 w-full gap-7">
          {navLinks.map((link) => {
            return (
              <NavLink to={link.path} key={link.id} className="font-medium">
                {link.text}
              </NavLink>
            );
          })}
          <Button classname="bg-green-900 text-white w-full">
            <FontAwesomeIcon icon={faWhatsapp} size="xl" className="mr-2" />
            Hubungi Kami
          </Button>
        </div>
      </div>
    </>
  );
};

export default MenuOverlay;
