export default function About() {

  return (
    <>
      <section id="about" className="w-[90svw] md:w-[70vw] lg:w-full bg-[#FCFAFF] mx-auto lg:px-36 flex flex-col justify-center pt-[14vh] pb-4">
        <h3 className="text-xl md:text-2xl font-semibold mb-16"><span className="text-[#FF8080]">03</span> ABOUT</h3>
        <h4 className="text-lg lg:flex lg:flex-wrap lg:w-[70vw]">
          <div className="inline">
            I always pursue my curiosity. Consuming a variety of tech related blogs and podcasts, 
            combined with my long love of problem solving, has eventually led me to finally leave my 12-year long 
            retail management career. Finally, I joined and subsequently graduated from the <span className="text-[#FF8080] inline">Makers Academy</span> software development bootcamp.
          </div><br />
          In just 3 months, I have learned the foundations of modern web development technologies and got to 
          team up on building 3 full-stack web apps. The latter has proven especially beneficial, because it allowed me to learn 
          how to navigate working as a part of a team on the whole process of software development. From project management and 
          implementing agile methodology, to code reviews and solving those inevitable merging conflicts.<br /><br />
          <span className="font-semibold">I am now ready to start my career in tech. I feel I have barely scratched the surface yet and I am keen 
          to build on my experiences and keep learning and growing as a software developer.</span>
        </h4>
      </section>
    </>
  );
}