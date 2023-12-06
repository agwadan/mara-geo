import Image from "next/image";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-10 bg-secondary ">
      <div className="grid  grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-1">

        {/* Grid Item 1 */}
        <div className="flex justify-center items-center my-6">
        <Image
          src={"./images/logo_white.svg"}
          alt="Mara Geo"
          height={100}
          width={100}
          />
          </div>

        {/* Grid Item 2 */}
        <nav className="flex justify-center items-center list-none my-6">
          <ul className="flex flex-row">
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

        {/* Grid Item 3 */}
        <div className="social-links flex items-center justify-center text-white gap-4 my-6">
          <ul className="flex flex-row">
            <li className="text-xl px-2 cursor-pointer hover:text-primaryGrey">
              <BsTwitterX />
            </li>
            <li className="text-xl px-2 cursor-pointer hover:text-primaryGrey">
              <BsLinkedin />
            </li>
            <li className="text-xl px-2 cursor-pointer hover:text-primaryGrey">
              <FaFacebook />
            </li>
          </ul>
        </div>

      </div>
      <p className="text-xs font-xs text-white text-center my-10">
        <i>&copy; 2023 Mara Geo</i>
      </p>
    </footer>
  );
};

export default Footer;
