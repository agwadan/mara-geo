import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
      {/* Left Half */}
      <div className="flex flex-col justify-center ml-40 space-y-12">
        <h1 className="text-5xl font-bold">Mara Geo</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        {/* Buttons */}

        <button className="bg-black text-white inline-block py-4 rounded max-w-xs">
          Learn More
        </button>
      </div>
      {/* Right Half */}
      <div>
        <div className="right-half bg-primary">
          <div className=" img-container w-100 overflow-hidden h-screen">
            <Image
              alt="Map"
              src={"./images/map_base.svg"}
              height={200}
              width={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
