import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {

  return (
    <>
      <section id="projects" className="w-[90svw] bg-[#FCFAFF] mx-auto flex flex-col justify-center mt-32 pb-4">
        <h3 className="w-[50svw] text-lg border-b-2 border-[#FF8080] mb-16"><span className="text-[#FF8080]">01</span> Projects</h3>
        
        <div className="w-[90svw] flex flex-col rounded">
          <Image src="/hoodlums.png" className="items-start rounded-t" width={800} height={450} alt="Screenshot of the hoodlums.io" />
          <div className="border border-[#404040] border-t-0 rounded">
            <p className="font-semibold text-xl text-center py-4">Hoodlums</p>
            <p className="text-lg px-3 py-5"><span className="font-semibold">Desc: </span> 
              Website for the digital art project: Hoodlums.</p>
            <p className="text-lg px-3"><span className="font-semibold">Tech: </span> 
              Next.js, React, Javascript, TailwindCSS.</p>
            <div className="w-full flex flex-row py-8 pr-8 pl-3 justify-around">
              <Link href="https://github.com/k-dun/hoodlumsNFT" target="_blank">
                <button className="w-[38svw] font-semibold text-[#202020] bg-[#FCFAFF] text-base px-5 py-3 rounded-md border border-[#202020] flex flex-row justify-center mr-3">
                  Code
                </button>
              </Link>
              <Link href="https://www.hoodlums.io" target="_blank">
                <button className="w-[38svw] font-semibold text-[#202020] bg-[#FCFAFF] text-base px-5 py-3 rounded-md border border-[#FF8080] flex flex-row justify-center">
                  Link
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[90svw] flex flex-col border-2 border-[#FF8080] rounded mt-12">
          <Image src="/hoodlums.png" className="items-start rounded-t" width={800} height={450} alt="Screenshot of the hoodlums.io" />
          <p className="font-semibold text-xl text-center py-4">Hoodlums</p>
          <p className="text-lg px-3 py-5"><span className="font-semibold">Desc: </span> 
            Website for the digital art project: Hoodlums.</p>
          <p className="text-lg px-3"><span className="font-semibold">Tech: </span> 
            Next.js, React, Javascript, TailwindCSS.</p>
          <div className="w-full flex flex-row py-8 pr-8 pl-3 justify-around">
            <Link href="https://github.com/k-dun/hoodlumsNFT" target="_blank">
              <button className="w-[38svw] font-semibold text-[#202020] bg-[#FCFAFF] text-base px-5 py-3 rounded-md border border-[#202020] flex flex-row justify-center mr-3">
                Code
              </button>
            </Link>
            <Link href="https://www.hoodlums.io" target="_blank">
              <button className="w-[38svw] font-semibold text-[#202020] bg-[#FCFAFF] text-base px-5 py-3 rounded-md border border-[#FF8080] flex flex-row justify-center">
                Link
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}