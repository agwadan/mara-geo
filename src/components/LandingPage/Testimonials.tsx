"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonies = [
  {
    id: 1,
    name: "John Doe",
    role: "C.E.O - GIS Corporation of Uganda",
    testimonial:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia voluptatum facilis iste expedita, quasi quae optio exercitationem, tempore dicta iusto. Esse culpa harum ut accusamus quaerat eos nam, voluptatibus aliquid nihil dolore placeat eaque dolores id molestiae perspiciatis fugiat quisquam neque impedit dicta porro deserunt quam, cupiditate ab repellat? Excepturi, optio neque eaque, rerum eius dolorum adipisci modi explicabo iste porro natus officia necessitatibus obcaecati, architecto ratione? Fugiat repellat, nesciunt quos incidunt commodi veniam, rem quis fugit recusandae illum, aliquid aperiam. Optio, perspiciatis! Molestiae, ipsum. Fugiat, aperiam recusandae. Accusamus quos velit illum odit fugit consequuntur eum sit. Quas, expedita.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "C.E.O - GIS Corporation of Uganda",
    testimonial:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia voluptatum facilis iste expedita, quasi quae optio exercitationem, tempore dicta iusto. Esse culpa harum ut accusamus quaerat eos nam, voluptatibus aliquid nihil dolore placeat eaque dolores id molestiae perspiciatis fugiat quisquam neque impedit dicta porro deserunt quam, cupiditate ab repellat? Excepturi, optio neque eaque, rerum eius dolorum adipisci modi explicabo iste porro natus officia necessitatibus obcaecati, architecto ratione? Fugiat repellat, nesciunt quos incidunt commodi veniam, rem quis fugit recusandae illum, aliquid aperiam. Optio, perspiciatis! Molestiae, ipsum. Fugiat, aperiam recusandae. Accusamus quos velit illum odit fugit consequuntur eum sit. Quas, expedita.",
  },
  // Add more testimonies as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: true, // Show next/prev arrows
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <div className="-z-10 !important flex flex-col justify-center items-center">
        <h2>Testimonials</h2>
      </div>
      <Slider {...settings}>
        {testimonies.map((testimonial) => (
          <div key={testimonial.id} className=" p-10 w-auto !important">
            <div className="bg-white p-20 rounded shadow-xl italic">
              <p className="text-gray-800">
                &quot; {testimonial.testimonial} &quot;
              </p>
              <p className="text-gray-600 mt-4 font-bold">{testimonial.name}</p>
              <p className="text-gray-600 mt-4 font-bold">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
