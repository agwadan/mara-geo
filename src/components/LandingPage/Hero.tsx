import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <header
      id="home"
      className="grid grid-cols-2 gap-4 md:grid-cols-1 h-screen"
      ref={ref}
    >
      {/* Left Half */}
      <motion.div
        className="flex flex-col justify-center pl-40 md:bg-primary md:pl-10 md:text-white space-y-12"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Mara Geo</h1>
        <h3>
          We have a new upcoming course titled “GIS for Climate Risk Analysis
          and Actionable Insights”(CRAAI). The course is designed to provide a
          comprehensive understanding of the complex challenges posed by climate
          change and equip participants with the tools and knowledge necessary
          to assess, mitigate, and respond to climate-related risks. This course
          will delve into the interdisciplinary nature of climate risk analysis,
          incorporating scientific, economic, social, and policy perspectives to
          offer a holistic view of the subject.
        </h3>
        {/* Buttons */}

        <button className="bg-black text-white inline-block py-4 rounded max-w-xs">
          Sign up for CRAAI
        </button>
      </motion.div>

      {/* Right Half */}
      <div>
        <div className="right-half bg-primary md:hidden">
          <motion.div
            className=" img-container w-100 overflow-hidden h-screen"
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
