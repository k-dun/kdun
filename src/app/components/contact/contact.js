import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {

  return (
    <>
      <section id="contact" className="w-[90svw] md:w-[70vw] lg:w-full bg-[#FCFAFF] mx-auto lg:px-36 flex flex-col justify-center mt-32 pb-4">
        <h3 className="text-xl md:text-2xl mb-16 font-semibold"><span className="text-[#FF8080]">04</span> CONTACT</h3>
        
        <div className="w-full mb-16 flex flex-col py-14 justify-center items-center">
          <Link href="mailto:hi@kdun.dev"><p className="text-center text-2xl md:text-4xl text-[#202020]">hi<span className="text-[#FF8080] mx-1">@</span>kdun.dev</p></Link>
        </div>
      </section>
    </>
  );
}