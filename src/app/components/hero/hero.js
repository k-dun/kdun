import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

  return (
    <>
      <section className="min-h-[88svh] w-full flex flex-col pt-[12svh] items-center bg-[#FCFAFF]">
        <div className="w-[75svw] md:w-[60vw] pt-8">
          <Image src="/hero-image.png" className="" alt="Hero image - kdun's picture with a sign 'Dev for hire'" width={1500} height={1500} priority={true} />
        </div>
        <div className="w-[90svw] md:w-[70vw] pt-12 md:pt-16 flex flex-col items-center justify-center">
          <h2 className="w-[90svw] md:w-[70vw] text-2xl md:text-3xl text-center font-semibold">FRONTEND DEVELOPER</h2>
          <h1 className="w-[90svw] md:w-[70vw] text-lg md:text-xl mt-8"><span className="text-[#FF8080]">00</span> My name is 
            Konrad and I'm a frontend engineer based in London. I am passionate about UI/UX, web 
            design, startups and all things tech.</h1>
          <div className="w-[90svw] md:w-[70vw] flex flex-row pt-4 md:pt-6">
            <Link href="/#about">
              <button className="w-[42svw] md:w-[26vw] font-semibold text-[#202020] bg-[#FCFAFF] text-base md:text-lg px-5 py-3 rounded-md border border-[#202020] flex flex-row justify-center mr-3">
                <span className="text-[#FF8080] mr-2">01</span>Projects
              </button>
            </Link>
            <Link href="/Konrad_Dunski_CV.pdf" target="_blank">
              <button className="w-[42svw] md:w-[26vw] font-semibold text-[#202020] bg-[#FCFAFF] text-base md:text-lg px-5 py-3 rounded-md border border-[#FF8080] mr-2 flex flex-row justify-center">
                <span className="pr-2">Resumé</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-text"><path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}