import Image from "next/image";
import { type } from "os";

type CardProps = {
  icon: string;
  text: string;
  buttonText: string;
};

const ServicesCard = (props: CardProps) => {
  return (
    <div className="service__card">
      <div className="container mt-10 flex flex-col justify-center items-center gap-10">
        <Image src={props.icon} alt="Icon" width={40} height={40} />
        <p>{props.text}</p>
        <button className="bg-primary py-2 px-4 rounded-xl text-white">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
