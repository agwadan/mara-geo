import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="inline text-center">
      <div className="flex justify-center items-center w-screen mb-10">
        <h2 className="text-center">Our Services</h2>
      </div>
      <div className="cards-container flex flex-row flex-wrap justify-evenly">
        <ServicesCard
          icon="./images/worldwide_location.svg"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr"
          buttonText="Request"
        />
        <ServicesCard
          icon="./images/worldwide_location.svg"
          text="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr"
          buttonText="Request"
        />
        <ServicesCard
          icon="./images/worldwide_location.svg"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr"
          buttonText="Request"
        />
      </div>
    </div>
  );
};

export default Services;
