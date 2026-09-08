import React from 'react';
import AnimatedBar from './AnimatedBar';
import { FaAndroid, FaApple, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiDotnet, SiFlutter } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const technologies = [
  { name: 'Android', icon: <FaAndroid className="text-6xl text-[#3DDC84]" />, animationClass: 'animate-bounce-2s' },
  { name: 'Ios', icon: <FaApple className="text-6xl text-gray-800" />, animationClass: 'animate-bounce-3s' },
  { name: 'Html', icon: <FaHtml5 className="text-6xl text-[#E34F26]" />, animationClass: 'animate-bounce-4s' },
  { name: 'Java Script', icon: <FaJsSquare className="text-6xl text-[#F7DF1E]" />, animationClass: 'animate-bounce-2s' },
  { name: '.NET', icon: <SiDotnet className="text-6xl text-[#512BD4]" />, animationClass: 'animate-bounce-5s' },
  { name: '.Net Core', icon: <SiDotnet className="text-6xl text-[#512BD4]" />, animationClass: 'animate-bounce-4s' },
  { name: 'React Js', icon: <FaReact className="text-6xl text-[#61DAFB]" />, animationClass: 'animate-bounce-3s' },
  { name: 'C#', icon: <TbBrandCSharp className="text-6xl text-[#239120]" />, animationClass: 'animate-bounce-2s' },
  { name: 'Flutter', icon: <SiFlutter className="text-6xl text-[#02569B]" />, animationClass: 'animate-bounce-4s' },
  { name: 'React native', icon: <FaReact className="text-6xl text-[#61DAFB]" />, animationClass: 'animate-bounce-5s' }
];

const OurTechnology = () => {
  return (
    <section className="py-[100px] text-center">
      <div className="container mx-auto px-4">
        <div className="mb-10" data-aos="zoom-in">
          <h1 className="text-primary-blue text-4xl m-0 font-syne font-bold">Our Technology</h1>
          <p className="mb-0">Here’s what we do best</p>
          <AnimatedBar />
        </div>

        <div className="flex flex-wrap justify-center items-end mt-20">
          {technologies.map((tech, index) => (
            <div key={index} className="w-1/3 sm:w-1/4 md:w-1/5 p-4 flex flex-col items-center">
              <div className={`w-full ${tech.animationClass}`}>
                <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border border-gray-200 shadow-lg flex items-center justify-center mx-auto bg-white hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-syne font-semibold text-[18px] md:text-[22px] m-0 text-gray-800">{tech.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechnology;
