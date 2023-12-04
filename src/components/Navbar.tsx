import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className=" fixed flex flex-row bg- justify-between items-center bg-primaryGrey w-screen">
        <Image
          src="./images/logo_main.svg"
          alt="Mara Geo"
          width={70} // Width of the image
          height={70}
          className="py-3"
        />

        <ul className="flex flex-row  list-none w-100">
          <li className="px-2 cursor-pointer hover:text-secondary">Home</li>
          <li className="px-2 cursor-pointer hover:text-secondary">About</li>
          <li className="px-2 cursor-pointer hover:text-secondary">Services</li>
          <li className="px-2 cursor-pointer hover:text-secondary">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
