import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex flex-row bg-black justify-between items-center">
      <Image 
      src='./images/logo_main.svg' 
      alt="Mara Geo"
      width={70}          // Width of the image
      height={70}  
      className="py-3"/>
      
      <ul className="flex flex-row  list-none w-100 m-4">
        <li className="px-2">Home</li>
        <li className="px-2">About</li>
        <li className="px-2">Services</li>
        <li className="px-2">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar