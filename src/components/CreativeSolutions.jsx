import React from 'react';
import AnimatedBar from './AnimatedBar';
import { FaMobileAlt, FaLaptop, FaCloud, FaBullhorn, FaCheckCircle } from 'react-icons/fa';

const CreativeSolutions = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-no-repeat animated-bg-slow" style={{ backgroundImage: 'url("https://www.starlinetechno.net/images/why.png")' }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#2a64a5]/85 z-0"></div>

      <div className="w-full relative z-10 flex flex-wrap">
        {/* Left Content */}
        <div className="w-full md:w-1/2 bg-white px-8 py-16 md:px-[5%] md:py-[7%] flex flex-col justify-center">
          <div>
            <h2 className="text-[36px] text-primary-orange font-bold font-syne mb-2" data-aos="zoom-in">
              <span className="text-gray-800">Our </span>Creative Solutions
              <div className="bg-[#0c5adb] h-[1px] w-0"></div>
              <div className="bg-primary-orange h-[3px] w-[90px] mt-5 relative rounded-[48px] before:content-[''] before:absolute before:left-0 before:top-[-3.7px] before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#0C5ADB] before:animate-[moveBg_3s_linear_infinite]"></div>
            </h2>
            <p className="text-[14px] text-gray-txt mb-[36px]" data-aos="zoom-in">
              Engaging clients we align development program with business goals for your business addressing critical pain points for your success. We believe in delivering design and required changes your business need.
            </p>
          </div>
          <div>
            <ul className="p-0 m-0">
              <li className="relative pl-[27px] pb-[3px] mb-[15px] font-medium text-gray-txt list-none text-[14px]" data-aos="zoom-in">
                <FaCheckCircle className="absolute top-0 left-0 text-[21px] text-primary-blue bg-white rounded-full" />
                Putting your business the top of Google search
              </li>
              <li className="relative pl-[27px] pb-[3px] mb-[15px] font-medium text-gray-txt list-none text-[14px]" data-aos="zoom-in">
                <FaCheckCircle className="absolute top-0 left-0 text-[21px] text-primary-blue bg-white rounded-full" />
                Creating innovative and integrated business system online
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2 mb-4">
                <div className="bg-white p-[30px_10px] rounded-[10px] text-center shadow-[4px_4px_8px_#0404044f] h-full flex flex-col justify-center items-center transform transition-transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="200">
                  <FaMobileAlt className="text-6xl text-primary-navy mb-4" />
                  <h3 className="m-0 text-[18px] mt-[21px] font-black font-syne">Mobile Applications</h3>
                </div>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <div className="bg-white p-[30px_10px] rounded-[10px] text-center shadow-[4px_4px_8px_#0404044f] h-full flex flex-col justify-center items-center transform transition-transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="300">
                  <FaLaptop className="text-6xl text-primary-navy mb-4" />
                  <h3 className="m-0 text-[18px] mt-[21px] font-black font-syne">Web Applications</h3>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="bg-white p-[30px_10px] rounded-[10px] text-center shadow-[4px_4px_8px_#0404044f] h-full flex flex-col justify-center items-center transform transition-transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="400">
                  <FaCloud className="text-6xl text-primary-navy mb-4" />
                  <h3 className="m-0 text-[18px] mt-[21px] font-black font-syne">Cloud Computing</h3>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="bg-white p-[30px_10px] rounded-[10px] text-center shadow-[4px_4px_8px_#0404044f] h-full flex flex-col justify-center items-center transform transition-transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="500">
                  <FaBullhorn className="text-6xl text-primary-navy mb-4" />
                  <h3 className="m-0 text-[18px] mt-[21px] font-black font-syne">Digital Marketing</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSolutions;
