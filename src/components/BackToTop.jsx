import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed bottom-[20px] right-[20px] z-[99] transition-opacity duration-400 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <button 
        onClick={scrollToTop}
        className="bg-primary-orange text-white w-[50px] h-[50px] rounded-[12%] flex items-center justify-center shadow-[2px_3px_1px_rgba(255,255,255,0.5)] hover:bg-[#2965a5] hover:shadow-none transition-all duration-400 cursor-pointer border-none outline-none"
        aria-label="Back to top"
      >
        <FaAngleUp className="text-[31px]" />
      </button>
    </div>
  );
};

export default BackToTop;
