import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {

  return (
    <>
      <section id="projects" className="w-[90svw] bg-[#FCFAFF] mx-auto flex flex-col justify-center mt-32 pb-4">
        <h3 className="w-[50svw] text-xl mb-16"><span className="text-[#FF8080]">04</span> Contact</h3>
        
        <div className="w-full flex flex-col pt-14 items-center">
          <div className="flex flex-row justify-center items-center">
            <Link href="mailto:konrad.dunski@gmail.com" target="_blank">
              <Image src="./email-icon.svg" width="30" height="30" alt="Email Icon" className="mx-4" />
            </Link>
            <Link href="https://www.github.com/k-dun" target="_blank">
              <Image src="./github-icon.svg" width="32" height="32" alt="Github Icon" className="mx-4" />
            </Link>
            <Link href="https://www.linkedin.com/in/kdunski" target="_blank">
              <Image src="./linkedin-icon.svg" width="30" height="30" alt="LinkedIn Icon" className="mx-4" />
            </Link>
            <Link href="https://twitter.com/kdun_dev" target="_blank">
              <Image src="./twitter-icon.svg" width="27" height="27" alt="Twitter Icon" className="mx-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}