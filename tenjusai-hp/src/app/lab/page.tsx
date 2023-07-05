'use client';
import {useEffect, useState, useRef } from 'react';

const Lab: React.FC = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      const st = container.scrollTop;

      if (st > lastScrollTop) {
        // downscroll
        container.classList.add("snap-y");
        container.classList.add("snap-mandatory");
      } else {
        // upscroll
        container.classList.remove("snap-y");
        container.classList.remove("snap-mandatory");
      }
      lastScrollTop = st;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
    <div className="relative">
      <div ref={containerRef} className="snap-y snap-mandatory h-screen w-screen overflow-scroll scrollbar-hide">
        <div className="snap-start h-screen w-screen bg-red-500">1</div>
        <div className="snap-start h-screen w-screen bg-green-500">2</div>
        <div className="snap-start h-screen w-screen bg-blue-500">3</div>
      </div>
    </div>

    {/* <div className="h-screen bg-tenjusaiHero"></div> */}
    </>
  );
}

export default Lab;