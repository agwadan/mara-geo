import React, { useRef } from "react";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="services" className="inline text-center" ref={ref}>
      <div className="flex justify-center items-center w-screen mb-10">
        <h2 className="text-center">Our Services</h2>
      </div>
      <div className="cards-container flex flex-row flex-wrap justify-evenly">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <ServicesCard
            icon="./images/worldwide_location.svg"
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr"
            buttonText="Request"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <ServicesCard
            icon="./images/worldwide_location.svg"
            text="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr"
            buttonText="Request"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <ServicesCard
            icon="./images/worldwide_location.svg"
            text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr"
            buttonText="Request"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
