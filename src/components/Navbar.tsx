import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [humbergerOpen, setHumbergerOpen] = useState(false);

  return (
    <nav className="navbar z-10 !important">
      <div className=" fixed flex flex-row bg- justify-between items-center bg-primaryGrey w-full px-6">
        <Image
          src="./images/logo_main.svg"
          alt="Mara Geo"
          width={70} // Width of the image
          height={70}
          className="py-3"
        />

        <ul className="flex flex-row md:hidden list-none w-100 ">
          <li>
            <a
              href="#home"
              className="px-2 cursor-pointer hover:text-secondary"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-2 cursor-pointer hover:text-secondary"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="px-2 cursor-pointer hover:text-secondary"
            >
              Services
            </a>
          </li>
          <li>
            <a href="#map" className="px-2 cursor-pointer hover:text-secondary">
              Project Locations
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className=" px-2 cursor-pointer hover:text-secondary"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Humberger Icon */}
        <div
          className="hidden md:block cursor-pointer"
          onClick={() => setHumbergerOpen(true)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${humbergerOpen ? "block" : "hidden"}`}>
        <div className="fixed  h-screen w-full bg-black bg-opacity-60">
          <div
            id="menu"
            className="absolute flex flex-col items-left py-8 space-y-6 font-800 bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-xl"
          >
            <button
              className="w-full ml-80"
              onClick={() => setHumbergerOpen(false)}
            >
              <RxCross2 />
            </button>

            <a className="pl-6 border-t border-primaryGrey pt-4" href="#">
              Home
            </a>
            <a className="pl-6 border-t border-primaryGrey pt-4" href="#About">
              About
            </a>
            <a className="pl-6 border-t border-primaryGrey pt-4" href="#">
              Services
            </a>
            <a className="pl-6 border-t border-primaryGrey pt-4" href="#">
              Tools
            </a>
            <a className="pl-6 border-t border-primaryGrey pt-4" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
