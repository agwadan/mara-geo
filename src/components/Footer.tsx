import Image from "next/image";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-10 bg-secondary ">
      <div className="flex justify-between ">
        <Image
          src={"./images/logo_white.svg"}
          alt="Mara Geo"
          height={100}
          width={100}
        />
        <nav>
          <ul className="flex justify-center items-center list-none ">
            <li className="px-2 text-white cursor-pointer hover:text-primaryGrey">
              Home
            </li>
            <li className="px-2 text-white cursor-pointer hover:text-primaryGrey">
              About
            </li>
            <li className="px-2 text-white cursor-pointer hover:text-primaryGrey">
              Services
            </li>
            <li className="px-2 text-white cursor-pointer hover:text-primaryGrey">
              Contact
            </li>
          </ul>
        </nav>
        <div className="social-links flex">
          <ul className="flex items-center justify-center text-white gap-4">
            <li className="text-xl cursor-pointer hover:text-primaryGrey">
              <BsTwitterX />
            </li>
            <li className="text-xl cursor-pointer hover:text-primaryGrey">
              <BsLinkedin />
            </li>
            <li className="text-xl cursor-pointer hover:text-primaryGrey">
              <FaFacebook />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-xs font-xs text-white text-center">
        <i>&copy; 2023 Mara Geo</i>
      </p>
    </footer>
  );
};

export default Footer;
