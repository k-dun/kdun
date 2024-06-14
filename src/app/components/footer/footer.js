import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {

  return (
    <>
      <section className="w-full h-[15vh] lg:w-full lg:justify-center flex flex-col bg-[#FCFAFF] pt-6 pb-4 px-6">
        <div className="flex flex-row items-center self-center pb-3">
          <Link href="https://www.github.com/k-dun" target="_blank">
            <Image src="./github-icon.svg" width="27" height="27" alt="Github Icon" className="mx-4 w-7 hover:w-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/kdunski" target="_blank">
            <Image src="./linkedin-icon.svg" width="25" height="25" alt="LinkedIn Icon" className="mx-4 w-7 hover:w-8" />
          </Link>
          <Link href="https://twitter.com/kdun_dev" target="_blank">
            <Image src="./twitter-icon.svg" width="22" height="22" alt="Twitter Icon" className="mx-4 w-7 hover:w-8" />
          </Link>
        </div>
        <h4 className="text-sm self-end md:text-lg text-[#202020] mx-auto pb-5">Design by <span className="text-[#FF8080]">kdun.dev</span></h4>
      </section>
    </>
  );
}

