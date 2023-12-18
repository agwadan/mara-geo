import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <header
      id="home"
      className="grid grid-cols-2 gap-4 md:grid-cols-1 h-screen"
    >
      {/* Left Half */}
      <motion.div
        className="flex flex-col justify-center pl-40 md:bg-primary md:pl-10 md:text-white space-y-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Mara Geo</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        {/* Buttons */}

        <button className="bg-black text-white inline-block py-4 rounded max-w-xs">
          Learn More
        </button>
      </motion.div>

      {/* Right Half */}
      <div>
        <div className="right-half bg-primary md:hidden">
          <motion.div
            className=" img-container w-100 overflow-hidden h-screen"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="Map"
              src={"./images/map_base.svg"}
              height={200}
              width={1000}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
