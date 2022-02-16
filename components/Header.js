import Image from "next/image";
import { useState } from "react";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="fixed top-0 bg-white w-full flex justify-around items-center py-4 shadow-lg z-50">
      <div className="relative w-36 h-10 z-20">
        <Image
          src="/assets/images/headerlogo.png"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex items-center">
        <div className="hidden sm:flex space-x-8 pr-4">
          <HeaderLink label="Discover" active />
          <HeaderLink label="People" />
          <HeaderLink label="Learning" />
          <HeaderLink label="Jobs" />
        </div>
        <button
          className={`menu ${menuOpen} z-20 sm:hidden`}
          onClick={toggleMenu}
        >
          <div className="">
            <span className="top"></span>
            <span className="bottom"></span>
          </div>
        </button>
      </div>
      <nav
        className={`bg-white flex-col flex mt-[72px] h-screen w-screen fixed top-0 center space-y-7 sm:hidden transition-all translate-x-full ${
          menuOpen && "translate-x-0"
        }`}
      >
        <HeaderLink label="Discover" active large />
        <HeaderLink label="People" large />
        <HeaderLink label="Learning" large />
        <HeaderLink label="Jobs" large />
      </nav>
    </header>
  );
};

export default Header;
