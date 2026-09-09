import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-navy pt-[60px] pb-[20px] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="mb-4 bg-white inline-block p-3 rounded-lg">
              <img src="/logo1.png" alt="Appvix Technologies Logo" className="h-16 w-auto object-contain" />
            </div>
            <div>
              <p className="text-[14px] text-white mt-[10px] mb-0 leading-relaxed opacity-80">
                Appvix Technologies Pvt. Ltd is Integrated IT Consulting and Service Provider, one stop for Business IT solution & services as web-development, mobile app, custom software.
              </p>
            </div>
          </div>
          
          <div className="hidden md:block md:w-1/4 px-4"></div>
          
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="mb-4 flex items-center">
              <div className="w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center mr-[21px]">
                <FaEnvelope className="text-xl" />
              </div>
              <h4 className="text-[#f57e35] text-[18px] font-syne font-semibold m-0">E-Mail Address</h4>
            </div>
            <div className="ml-[71px] opacity-80">
              <p className="text-[14px] text-white m-0">appvixtechnologies@gmail.com</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/4 px-4">
            <div className="mb-4 flex items-center">
              <div className="w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center mr-[21px]">
                <FaPhoneAlt className="text-xl" />
              </div>
              <h4 className="text-[#f57e35] text-[18px] font-syne font-semibold m-0">Phone Number</h4>
            </div>
            <div className="ml-[71px] opacity-80">
              <p className="text-[14px] text-white m-0">+91 6261640704</p>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="text-center mt-[49px] pt-[28px] border-t border-white/20">
        <p className="text-[12px] md:text-[14px] text-white m-0 opacity-70">
          © Copyright 2026 | All Rights Reserved | Udyam Registered MSME
        </p>
      </div>
    </footer>
  );
};

export default Footer;
