import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {

  return (
    <>
      <section id="projects" className="w-[90svw] bg-[#FCFAFF] mx-auto flex flex-col justify-center mt-32 pb-4">
        <h3 className="w-[50svw] text-xl mb-8"><span className="text-[#FF8080]">04</span> CONTACT</h3>
        
        <div className="w-full flex flex-col pt-14 items-center">
          <Link href="mailto:hi@kdun.dev"><p className="text-center text-2xl text-[#202020] mb-6">hi<span className="text-[#FF8080] mx-1">@</span>kdun.dev</p></Link>
          <div className="flex flex-row justify-center items-center pt-12">
            <Link href="https://www.github.com/k-dun" target="_blank">
              <Image src="./github-icon.svg" width="27" height="27" alt="Github Icon" className="mx-3" />
            </Link>
            <Link href="https://www.linkedin.com/in/kdunski" target="_blank">
              <Image src="./linkedin-icon.svg" width="25" height="25" alt="LinkedIn Icon" className="mx-3" />
            </Link>
            <Link href="https://twitter.com/kdun_dev" target="_blank">
              <Image src="./twitter-icon.svg" width="22" height="22" alt="Twitter Icon" className="mx-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}