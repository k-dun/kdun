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
      <div className="navbar top-0 flex flex-row w-full h-[12svh] bg-[#FCFAFF]">
        <div className="flex w-[33svw] justify-start items-center">
          <Link href="/">
            <Image src="/kdun-logo.svg" priority={true} className="pl-3 w-32" width={400} height={100} alt="Kdun Logo" />
          </Link>
        </div>
        
        <div className="flex w-[64svw] justify-end items-center">
          <div className="flex justify-end items-center">
            <div className="flex flex-row">

              {!menuOpen && (
                <button className="absolute top-8 right-4 btn btn-lg btn-square btn-ghost flex-1 pr-2" onClick={() => toggleMenu()}>
                  <Image src="/nav-icon.svg" priority={true} className="" width={35} height={35} alt="Open Menu Button" />
                </button>
              )}

              <PopUpMenu isOpen={menuOpen} onClose={toggleMenu} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}