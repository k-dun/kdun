import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {

  return (
    <>
      <section id="contact" className="w-[90svw] md:w-[70vw] lg:w-full bg-[#FCFAFF] mx-auto lg:px-40 flex flex-col justify-center mt-32 pb-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl mb-16 font-semibold"><span className="text-[#FF8080]">04</span> CONTACT</h3>
        
        <div className="w-full mb-16 flex flex-col py-14 justify-center items-center">
          <Link href="mailto:hi@kdun.dev"><p className="text-center text-2xl md:text-4xl text-[#202020]">hi<span className="text-[#FF8080] mx-1">@</span>kdun.dev</p></Link>
          <div className="flex flex-row items-center self-center mt-8">
            <Link href="https://www.github.com/k-dun" target="_blank">
              <Image src="./github-icon.svg" width="27" height="27" alt="Github Icon" className="mx-4" />
            </Link>
            <Link href="https://www.linkedin.com/in/kdunski" target="_blank">
              <Image src="./linkedin-icon.svg" width="25" height="25" alt="LinkedIn Icon" className="mx-4" />
            </Link>
            <Link href="https://twitter.com/kdun_dev" target="_blank">
              <Image src="./twitter-icon.svg" width="22" height="22" alt="Twitter Icon" className="mx-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}