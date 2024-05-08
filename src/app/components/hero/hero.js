import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

  return (
    <>
      <section className="h-[88svh] w-full flex flex-col items-center bg-[#FCFAFF]">
        <div className="w-[85svw] pt-8">
          <Image src="/hero-image.png" className="" alt="Hero image - kdun's picture with a sign 'Dev for hire'" width={1500} height={1500} priority={true} />
        </div>
        <div className="w-[90svw] pt-12 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">Software Developer</h2>
          <hr className="w-[80svw] h-[2px] mt-3 mb-5 border-0 rounded bg-[#FF8080]" />
          <h1 className="w-[90svw] text-lg">I'm Konrad, a frontend engineer based in London. I am a
            passionate UI/UX designer and a lover of all things tech.</h1>
          <div className="w-[90svw] flex flex-row pt-4 justify-between">
            <Link href="/#about">
              <button className="w-[40svw] font-semibold text-[#202020] bg-[#FCFAFF] text-base px-5 py-3 rounded-md border border-[#202020] flex flex-row justify-center">
                About Me <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-corner-right-down" className="ml-2"><polyline points="10 15 15 20 20 15"/><path d="M4 4h7a4 4 0 0 1 4 4v12"/></svg>
              </button>
            </Link>
            <Link href="/#about">
              <button className="w-[40svw] font-semibold text-[#202020] bg-[#FCFAFF] text-base px-5 py-3 rounded-md border border-[#FF8080] mr-2 flex flex-row justify-center">
                Resumé <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-text" className="ml-2"><path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}