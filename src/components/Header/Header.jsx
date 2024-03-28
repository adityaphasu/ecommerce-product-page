import { Logo, ProfileAvatar } from "../../assets/images";
import CartButton from "../Cart/CartButton";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="w-full bg-white px-6 pb-4 pt-3 lg:mx-auto lg:max-w-[72.5rem] lg:pb-9 lg:pt-[1.81rem]">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4 lg:flex-row-reverse lg:justify-end lg:gap-[3.35rem]">
          <Menu />
          <a href="/" aria-label="Logo">
            <img src={Logo} alt="Sneakers" className="lg:w-[8.75rem]" />
          </a>
        </div>

        <div className="flex items-center gap-5 lg:gap-10">
          <CartButton />
          <a
            href="/"
            aria-label="Profile"
            className="rounded-full transition hover:ring-2 hover:ring-orange focus:ring-2 focus:ring-orange ">
            <img
              src={ProfileAvatar}
              alt="Profile Image"
              className="size-6 md:size-10 lg:size-[3.05rem]"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
