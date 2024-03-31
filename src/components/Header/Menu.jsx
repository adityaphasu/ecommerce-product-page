import { useState } from "react";
import { cn } from "../../lib/cn";
import { Close } from "../../assets/icons";
import { links } from "../../constants";
import { motion } from "framer-motion";
import MenuIcon from "../../assets/icons/icon-menu.svg";
import Overlay from "../Overlay";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && <Overlay onClick={handleMenuClick} />}
      <button
        onClick={handleMenuClick}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
        className={cn("z-[60] lg:hidden", isOpen && "fixed")}>
        <img src={isOpen ? Close : MenuIcon} alt="" />
      </button>

      <ul
        onMouseLeave={() => setSelected(null)}
        className={cn(
          "fixed inset-0 z-50 flex h-full w-4/6 flex-col gap-4 bg-white px-6 pt-[5.6rem] transition-all duration-300 lg:static lg:flex-row lg:gap-8 lg:p-0",
          isOpen ? "-left-0" : "-left-[50rem]"
        )}>
        {links.map((link, idx) => (
          <li
            key={link}
            onMouseEnter={() => setSelected(idx)}
            className="relative text-lg font-bold leading-relaxed text-dark-grayish-blue hover:text-very-dark-blue lg:text-base lg:font-normal lg:tracking-[-0.02em]">
            <a href="/">{link}</a>
            {selected === idx && (
              <motion.span
                className="absolute -bottom-[3.1rem] block h-1 w-full bg-orange"
                layoutId="underline"
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Menu;
