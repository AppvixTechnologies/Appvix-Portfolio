import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-primary-navy text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <p className="mb-0 text-white flex items-center gap-2">
              <FaEnvelope className="text-primary-orange" />
              appvixtechnologies@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="mb-0 text-white flex items-center gap-2">
              <FaPhoneAlt className="text-primary-orange" />
              +91 9407235770
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
