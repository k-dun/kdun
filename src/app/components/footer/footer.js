import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

  return (
    <>
      <section className="w-full flex flex-row bg-[#FCFAFF] pt-6 pb-4 px-6">
        <h4 className="text-xs md:text-lg text-[#202020] mx-auto">Design by <span className="text-[#FF8080]">kdun.dev</span></h4>
      </section>
    </>
  );
}