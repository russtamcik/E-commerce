import Image from "next/image";
import najotLogo from "@/assets/najot-logo.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Najot e-commerce | About",
  description: "E-commerce website forever",
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Image src={najotLogo} alt="Najot logo" width={200} />
      <Image
        src="https://uploads-ssl.webflow.com/62361b0ee9fbf8a744598959/62be9351137b5e0541861308_Najot-logo-1.jpg"
        alt="Najot ta'lim"
        width={300}
        height={200}
      />
    </div>
  );
};

export default About;
