import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {

  return (
    <>
      <section id="projects" className="w-[90svw] bg-[#FCFAFF] mx-auto flex flex-col justify-center mt-32 pb-4">
        <h3 className="w-[50svw] text-xl mb-8"><span className="text-[#FF8080]">04</span> CONTACT</h3>
        
        <div className="w-full flex flex-col pt-14 items-center">
          <Link href="mailto:hi@kdun.dev"><p className="text-center text-2xl text-[#202020] mb-6">hi<span className="text-[#FF8080] mx-1">@</span>kdun.dev</p></Link>
        </div>
      </section>
    </>
  );
}