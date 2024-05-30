import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PopUpMenu from './PopUpMenu';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className="navbar fixed top-0 w-[100vw] max-w-[2200px] flex flex-row h-[12svh] bg-[#FCFAFF]">
        <div className="flex w-[33svw] justify-start items-center">
          <Link href="/">
            <Image src="/kdun-logo.svg" priority={true} className="absolute top-8 left-4 pl-3 w-36 md:w-40 lg:w-44 xl:w-52" width={400} height={100} alt="Kdun Logo" />
          </Link>
        </div>
        
        <div className="flex w-[67svw] justify-end items-center">
          <div className="flex items-center">
            {!menuOpen && (
              <button className="absolute top-8 right-4 btn btn-lg btn-square btn-ghost flex-1 pr-3" onClick={() => toggleMenu()}>
                <Image src="/nav-icon.svg" priority={true} className="lg:w-12 xl:w-16" width={35} height={35} alt="Open Menu Button" />
              </button>
            )}
            
            <PopUpMenu isOpen={menuOpen} onClose={toggleMenu} />
          </div>
        </div>
      </div>
    </>
  );
}