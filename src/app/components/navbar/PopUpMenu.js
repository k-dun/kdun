import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PopUpMenu = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50 w-full max-w-[2200px] flex flex-col items-center justify-center bg-[#FCFAFF]">
        
      <button className="absolute top-8 right-4 btn btn-lg btn-square btn-ghost flex-1 pr-2" onClick={onClose}>
        <Image src="/nav-icon-close.svg" priority={true} className="lg:w-12" width={35} height={35} alt="Close Menu Button" />
      </button>

      <ul className="space-y-8 font-semibold text-4xl text-[#202020]">
        <li>
          <Link href="/#hero" onClick={onClose} className="hover:border-b-2 border-b-[#FF8080]">
            <span className="text-[#FF8080]">00</span> HOME
          </Link>
        </li>
        <li>
          <Link href="/#projects" onClick={onClose} className="hover:border-b-2 border-b-[#FF8080]">
            <span className="text-[#FF8080]">01</span> PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/#skills" onClick={onClose} className="hover:border-b-2 border-b-[#FF8080]">
            <span className="text-[#FF8080]">02</span> SKILLS
          </Link>
        </li>
        <li>
          <Link href="/#about" onClick={onClose} className="hover:border-b-2 border-b-[#FF8080]">
            <span className="text-[#FF8080]">03</span> ABOUT ME
          </Link>
        </li>
        <li>
          <Link href="/#contact" onClick={onClose} className="hover:border-b-2 border-b-[#FF8080]">
            <span className="text-[#FF8080]">04</span> CONTACT
          </Link>
        </li>
      </ul> 
    </div>
  ) : null;
};

export default PopUpMenu;