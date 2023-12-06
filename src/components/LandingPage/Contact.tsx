import { MdLocalPhone, MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact my-10rem mx-4rem flex flex-col justify-center items-center">
      <h2>Contact Us</h2>
      <div className="grid grid-cols-2 mt-5rem sm:grid-cols-1 md:grid-cols-1 gap-10">

        {/* Grid 1 */}
        <div className="flex flex-col justify-center h-full gap-4 text-white">
          <div className="flex flex-col justify-center py-4 items-center bg-primary max-w-xs rounded-1rem">
            <MdLocalPhone />
            <p className="text-white">+256754423432</p>
            <a className="text-white" href="tel:+1123-456-7890">
              <i>Call Us Now</i>
            </a>
          </div>
          <div className="flex flex-col justify-center py-4 items-center bg-primary max-w-xs rounded-1rem">
            <MdAlternateEmail />
            <p className="text-white">info@marageo.com</p>
            <a className="text-white" href="mailto:info@marageo.com">
              <i>Send email</i>
            </a>
          </div>
        </div>

        {/* Grid 2 */}
        <form className="gap-5 " action="">
          <input
            className="py-2 px-4 rounded-md my-3 outline-none w-full"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="py-2 px-4 rounded-md my-3 outline-none w-full"
            type="email"
            placeholder="Email"
          />
          <br />
          <textarea
            className="py-2 px-4 rounded-md my-3 outline-none w-full h-40"
            placeholder="Message"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
