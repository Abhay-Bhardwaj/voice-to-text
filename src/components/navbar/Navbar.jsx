'use client'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal';
import { LogoSvg } from '@/static/icons';
import { MenuSvg } from '@/static/MenuSvg';
import { MicSvg } from '@/static/MicSvg';
import { MenuItem } from '@/static/MenuList';

export default function Navbar() {

    const [isScrolledToTop, setIsScrolledToTop] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolledToTop = scrollTop === 0;
      setIsScrolledToTop(scrolledToTop);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex w-full justify-between items-center p-4 ${(isScrolledToTop) ? 'relative' : 'fixed'} ${(isScrolledToTop || menuOpen)? 'bg-black' : 'bg-white'} z-20 text-white transition-colors ease-linear duration-3000`}>
        <div className='flex items-center mx-2'>
          <LogoSvg height={28}/>
        </div>
        <div className='flex space-x-4 mx-5'>
          
          <button
            onClick={handleModalOpen}
            className='px-1 sm:px-8 py-1 bg-gray-200 text-black rounded transition ease-in-out delay-100 hover:bg-blue-300'
          >
            <span className='hidden sm:block'>Say Hello</span>
            <MicSvg className='block sm:hidden'/>
          </button>
          <button
            onClick={toggleMenu}
            className='px-4 py-1 text-gray-400 flex flex-row gap-2'
          >
            <span className='hidden sm:block'>Menu</span>
            <MenuSvg stroke={`${(isScrolledToTop || menuOpen) ? "white" : "#060606"}`}/>
          </button>
        </div>
        {menuOpen && (
          <div className='fixed w-fit inset-0 z-10 rounded-b-3xl'>
            <div className='fixed top-16 left-0 right-0 px-20 bg-black rounded-b-3xl overflow-hidden transition-transform ease-in-out transform translate-y-0'>
              <ol className='flex flex-col'>
                {MenuItem.map((item, id) => (
                  <li key={id} className='p-4 pb-10 border-gray-300'>
                    <a href={item.path} className='flex items-center gap-2 text-4xl font-bold text-gray-300 opacity-75'>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
        {isModalOpen && <Modal onClose={handleModalClose} />}
    </nav>
  )
}
