import { MdLocalPhone, MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact my-10rem mx-4rem flex flex-col justify-center items-center">
      <h2>Contact Us</h2>
      <div className="grid grid-cols-2 mt-5rem">
        {/* Grid 1 */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center py-4 items-center bg-primary max-w-xs rounded-1rem">
            <MdLocalPhone />
            <p>+256754423432</p>
            <a href="tel:+1123-456-7890">Call Us Now</a>
          </div>
          <div className="flex flex-col justify-center py-4 items-center bg-primary max-w-xs rounded-1rem">
            <MdAlternateEmail />
            <p>info@marageo.com</p>
            <a href="mailto:info@marageo.com">Send email</a>
          </div>
        </div>

        {/* Grid 2 */}
        <form className="gap-5 " action="">
          <input
            className="py-2 px-4 rounded-md m-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="py-2 px-4 rounded-md ml-3"
            type="email"
            placeholder="Email"
          />
          <br />
          <textarea
            className="py-2 px-4 rounded-md ml-3 w-full h-full"
            placeholder="Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
