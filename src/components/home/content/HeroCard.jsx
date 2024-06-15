'use client'
import React, { useEffect, useState } from 'react'

export default function HeroCard() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('great-ideas-section');
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY;
    
      const newOpacity = 1 - 2*(scrollPosition - sectionTop) / sectionHeight;
      setOpacity(newOpacity >= 0 ? newOpacity : 0);
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="bg-black flex flex-col p-5 md:p-12 tracking-tight"
    >
      <div id="great-ideas-section" className="w-full md:w-2/4" style={{ opacity: opacity }} >
        <h1 className="text-4xl text-white font-semibold mx-5 tracking-tight md:text-6xl">
          Great Ideas
        </h1>
        <h1 className="text-4xl text-gray-400 font-semibold mx-5 tracking-tight md:text-6xl">
          Deserve Great Products
        </h1>
      </div>
    </div>
  );
}
