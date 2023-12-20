import { MdLocalPhone, MdAlternateEmail } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="contact"
      className="contact my-10rem mx-4rem flex flex-col justify-center items-center"
      ref={ref}
    >
      <h2>Contact Us</h2>
      <div className="grid grid-cols-2 mt-5rem sm:grid-cols-1 md:grid-cols-1 gap-10">
        {/* Grid 1 */}
        <div className="flex flex-col justify-center h-full gap-4 text-white">
          {/* Phone Contact Card */}
          <motion.div
            className="flex flex-col justify-center py-4 items-center bg-primary max-w-xs rounded-1rem"
            initial={{ opacity: 0, y: -60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <MdLocalPhone />
            <p className="text-white">+256754423432</p>
            <a className="text-white" href="tel:+1123-456-7890">
              <i>Call Us Now</i>
            </a>
          </motion.div>

          {/* Email Contact Card */}
          <motion.div
            className="flex flex-col justify-center py-4 items-center bg-primary max-w-xs rounded-1rem"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <MdAlternateEmail />
            <p className="text-white">info@marageo.com</p>
            <a className="text-white" href="mailto:info@marageo.com">
              <i>Send email</i>
            </a>
          </motion.div>
        </div>

        {/* Grid 2 */}
        <form className="gap-5 " action="">
          <motion.input
            className="py-2 px-4 rounded-md my-3 outline-none w-full"
            type="text"
            placeholder="Full Name"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          />
          <motion.input
            className="py-2 px-4 rounded-md my-3 outline-none w-full"
            type="email"
            placeholder="Email"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          />
          <br />
          <motion.textarea
            className="py-2 px-4 rounded-md my-3 outline-none w-full h-40"
            placeholder="Message"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
