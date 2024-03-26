import { useState } from "react";
import MenuIcon from "../../assets/icons/icon-menu.svg";
import { Close } from "../../assets/icons";
import { cn } from "../../lib/cn";
import { links } from "../../constants";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 size-full h-full bg-black/80"
          onClick={handleMenuClick}
        />
      )}
      <button
        onClick={handleMenuClick}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
        className={cn("z-50 lg:hidden", isOpen && "fixed")}>
        <img src={isOpen ? Close : MenuIcon} alt="" />
      </button>

      <ul
        className={cn(
          "fixed inset-0 z-20 flex h-full w-4/6 flex-col gap-4 bg-white px-6 pt-[5.6rem] transition-all duration-300 lg:static lg:flex-row lg:gap-8 lg:p-0",
          isOpen ? "-left-0" : "-left-[50rem]"
        )}>
        {links.map((link) => (
          <li
            key={link}
            className="text-lg font-bold leading-relaxed text-very-dark-blue lg:text-base lg:font-normal lg:tracking-[-0.02em]">
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Menu;
