import Image from 'next/image';
import Link from 'next/link';

export default function About() {

  return (
    <>
      <section id="about" className="w-[90svw] md:w-[70vw] lg:w-full bg-[#FCFAFF] mx-auto lg:px-40 flex flex-col justify-center pt-[12svh] pb-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-16"><span className="text-[#FF8080]">03</span> ABOUT</h3>
        <h4 className="text-lg md:text-xl lg:text-2xl lg:flex lg:flex-wrap lg:w-[70vw]">
          I always pursue my curiosity. Consuming a variety of tech related blogs and podcasts, 
          combined with my long love of problem solving, has eventually led me to finally leave 
          retail. <br /><br />
          Finally, I joined and subsequently graduated from the Makers Academy software development 
          bootcamp. I am now looking for my first job in tech!<br /><br />
        </h4>
      </section>
    </>
  );
}