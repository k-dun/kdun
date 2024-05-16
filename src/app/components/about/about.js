import Image from 'next/image';
import Link from 'next/link';

export default function About() {

  return (
    <>
      <section id="projects" className="w-[90svw] bg-[#FCFAFF] mx-auto flex flex-col justify-center mt-32 pb-4">
        <h3 className="w-[50svw] text-xl mb-16"><span className="text-[#FF8080]">03</span> ABOUT ME</h3>
        <h4 className="text-lg">
          I always pursue my curiosity. Consuming a variety of tech related blogs and podcasts 
          combined with my long love of problem solving has eventually led me to finally leave 
          retail. <br /><br />
          Finally, I joined and subsequently graduated from the Makers Academy software development 
          bootcamp. I am now looking for my first job in tech!<br /><br /> 
  
        </h4>
      </section>
    </>
  );
}