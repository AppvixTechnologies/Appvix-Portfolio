import React from 'react';
import AnimatedBar from './AnimatedBar';
import { FaLaptopCode, FaMobileAlt, FaDraftingCompass, FaPencilRuler, FaShoppingCart, FaBullhorn } from 'react-icons/fa';

const coreServices = [
  {
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    description: 'Get better control of your business with software that fits the way you work. We help drive efficiency in organizations by building custom software systems.',
    icon: <FaLaptopCode className="text-6xl text-primary-navy mx-auto" />,
    animation: 'fade-right'
  },
  {
    title: 'MOBILE APPS DEVELOPMENT',
    description: 'Mobile Apps are software designed for iPhone, iPad, HTML 5 (Windows Phones) and Android.',
    icon: <FaMobileAlt className="text-6xl text-primary-navy mx-auto" />,
    animation: 'fade-down'
  },
  {
    title: 'BRANDING & IDENTITY',
    description: 'We can create a new brand, refresh your existing presence, or work on parts of your brand setting you up for new opportunities and success.',
    icon: <FaDraftingCompass className="text-6xl text-primary-navy mx-auto" />,
    animation: 'fade-left'
  },
  {
    title: 'GRAPHICS DESIGN & SERVICES',
    description: 'We can create a new brand, refresh your existing presence, or work on parts of your brand setting you up for new opportunities and success.',
    icon: <FaPencilRuler className="text-6xl text-primary-navy mx-auto" />,
    animation: 'fade-right'
  },
  {
    title: 'ECOMMERCE & SOLUTIONS',
    description: 'In which you can show your settled premium rates to your Clients and Dealers with the help of our industry best software.',
    icon: <FaShoppingCart className="text-6xl text-primary-navy mx-auto" />,
    animation: 'fade-up'
  },
  {
    title: 'DIGITAL & MARKETING',
    description: 'We are expert in digital marketing service, techniques and strategies to provide internet marketing services to our client.',
    icon: <FaBullhorn className="text-6xl text-primary-navy mx-auto" />,
    animation: 'fade-left'
  }
];

const CoreServices = () => {
  return (
    <section className="bg-gray-bg py-[100px] relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 w-[350px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#2a64a5" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.4,-46.5C91,-33.9,97.2,-18.8,97.4,-3.6C97.6,11.6,91.8,26.9,81.8,39.3C71.8,51.7,57.6,61.1,42.5,67.6C27.4,74.1,11.4,77.7,-3.6,83C-18.6,88.3,-32.6,95.3,-44.6,91.2C-56.6,87.1,-66.6,71.9,-73.4,56.7C-80.2,41.5,-83.8,26.3,-83.6,11.5C-83.4,-3.3,-79.4,-17.7,-72.1,-30C-64.8,-42.3,-54.2,-52.5,-41.8,-60.2C-29.4,-67.9,-15.2,-73.1,0.2,-73.4C15.6,-73.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[350px] opacity-20 pointer-events-none transform rotate-180">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ec6923" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.4,-46.5C91,-33.9,97.2,-18.8,97.4,-3.6C97.6,11.6,91.8,26.9,81.8,39.3C71.8,51.7,57.6,61.1,42.5,67.6C27.4,74.1,11.4,77.7,-3.6,83C-18.6,88.3,-32.6,95.3,-44.6,91.2C-56.6,87.1,-66.6,71.9,-73.4,56.7C-80.2,41.5,-83.8,26.3,-83.6,11.5C-83.4,-3.3,-79.4,-17.7,-72.1,-30C-64.8,-42.3,-54.2,-52.5,-41.8,-60.2C-29.4,-67.9,-15.2,-73.1,0.2,-73.4C15.6,-73.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10" data-aos="zoom-in">
          <h1 className="text-primary-blue text-4xl m-0 font-syne font-bold">Core Services</h1>
          <p className="mb-0">Here’s what we do best</p>
          <AnimatedBar />
        </div>

        <div className="flex flex-wrap -mx-4">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-[25px]"
              data-aos={service.animation}
            >
              <div className="flip-card h-[382px] mb-[30px]">
                <div className="flip-card-inner relative w-full h-full shadow-[0px_1px_51.3px_5.7px_rgba(137,143,156,0.15)] rounded-lg">
                  
                  {/* Front Side */}
                  <div className="flip-card-front absolute w-full h-full bg-white border border-gray-border rounded-lg p-6 flex flex-col justify-center items-center text-center">
                    <div className="mb-5">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="leading-[37px] font-bold text-[21px] mb-4 text-gray-800 uppercase" dangerouslySetInnerHTML={{ __html: service.title.replace(' ', '<br/>') }}></h4>
                      <p className="text-[14px] m-0 px-[15px] text-gray-txt line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back absolute w-full h-full bg-white border border-gray-border rounded-lg p-6 flex flex-col justify-center items-center text-center">
                    <div className="mb-5">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="leading-[37px] font-bold text-[21px] mb-4 text-gray-800 uppercase" dangerouslySetInnerHTML={{ __html: service.title.replace(' ', '<br/>') }}></h4>
                      <p className="text-[14px] m-0 px-[15px] text-gray-txt">
                        {service.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
