import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PopUpMenu = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FCFAFF]">
      <div className="text-center">
        <button className="absolute top-8 right-4 btn btn-lg btn-square btn-ghost flex-1 pr-2" onClick={onClose}>
          <Image src="/nav-icon-close.svg" priority={true} className="" width={35} height={35} alt="Close Menu Button" />
        </button>
        <ul className="space-y-8 font-semibold text-4xl text-[#202020]">
          <li>
            <Link href="/" onClick={onClose}>
              <span className="text-[#FF8080]">00</span> HOME
            </Link>
          </li>
          <li>
            <Link href="/#projects" onClick={onClose}>
              <span className="text-[#FF8080]">01</span> PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/#skills" onClick={onClose}>
              <span className="text-[#FF8080]">02</span> SKILLS
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={onClose}>
              <span className="text-[#FF8080]">03</span> CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  ) : null;
};

export default PopUpMenu;