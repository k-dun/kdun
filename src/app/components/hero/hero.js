import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

  return (
    <>
      <section className="min-h-[88svh] w-[100vw] lg:w-full lg:px-32 flex flex-col lg:flex-row-reverse pt-[12svh] items-center bg-[#FCFAFF]">
        <div className="w-[65svw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] pt-8 lg:pt-12">
          <Image src="/hero-image.png" className="" alt="Hero image - kdun's picture with a sign 'Dev for hire'" width={1500} height={1500} priority={true} />
        </div>
        <div className="w-[90svw] md:w-[70vw] lg:w-[50vw] pt-12 md:pt-16 lg:pt-18 flex flex-col items-center justify-center">
          <h2 className="w-[90svw] md:w-[70vw] lg:w-[40vw] text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-semibold">FRONTEND DEVELOPER</h2>
          <h1 className="w-[90svw] md:w-[70vw] lg:w-[40vw] text-lg md:text-xl mt-8 lg:mt-10"><span className="text-[#FF8080]">00 </span>
            My name is Konrad and I am a frontend engineer based in London. I am passionate about UI/UX, web 
            design, startups and all things tech.</h1>
          <div className="w-[90svw] md:w-[70vw] lg:w-[40vw] flex flex-row pt-4 md:pt-6">
            <Link href="/#about">
              <button className="w-[42svw] md:w-[26vw] lg:w-[16vw] font-semibold text-[#202020] bg-[#FCFAFF] text-base px-5 py-3 rounded-md border lg:border-2 border-[#202020] shadow-md hover:shadow-xl flex flex-row justify-center mr-3">
                <span className="text-[#FF8080] mr-2">01</span>Projects
              </button>
            </Link>
            <Link href="/Konrad_Dunski_CV.pdf" target="_blank">
              <button className="w-[42svw] md:w-[26vw] lg:w-[16vw] font-semibold text-[#202020] bg-[#F4B7AA] text-base px-5 py-3 rounded-md border lg:border-2 border-[#202020] shadow-md hover:shadow-xl mr-2 flex flex-row justify-center">
                <span className="pr-2 bg-[#F4B7AA]">Resumé</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text bg-[#F4B7AA]"><path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}