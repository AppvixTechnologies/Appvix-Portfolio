import React, { useEffect, useRef } from 'react';
import AnimatedBar from './AnimatedBar';

const phases = [
  {
    count: '01',
    title: 'Planning',
    text: 'Planning to delivery we determine the Goal, and define Brand to locate the target audience. Analyzing your Competitors.',
    icon: <img src="/development/graphic.svg" alt="Planning" className="w-full max-w-[400px] h-auto object-contain" />
  },
  {
    count: '02',
    title: 'Design',
    text: 'It encompasses several different aspects, including webpage layout, content production, and graphic design.',
    icon: <img src="/development/design.svg" alt="Design" className="w-full max-w-[400px] h-auto object-contain" />
  },
  {
    count: '03',
    title: 'Develop',
    text: 'Developing from web apps to mobile apps, cloud-based or cross-platform desktop solutions.',
    icon: <img src="/development/develop.svg" alt="Develop" className="w-full max-w-[400px] h-auto object-contain" />
  },
  {
    count: '04',
    title: 'Test',
    text: 'Ensuring appropriate testing for all the web and mobile based system before going live, We address required issues before the system is live for public.',
    icon: <img src="/development/testing.svg" alt="Test" className="w-full max-w-[400px] h-auto object-contain" />
  },
  {
    count: '05',
    title: 'Launch',
    text: 'Once your system is ready, we create required marketing aspects to attack your potential leads, understanding your competitors and your business goal.',
    icon: <img src="/development/launch.svg" alt="Launch" className="w-full max-w-[400px] h-auto object-contain" />
  }
];

const PhaseOfDevelopment = () => {
  const lineRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      lineRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
          el.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover py-[100px] z-10" style={{ backgroundImage: 'url("https://www.starlinetechno.net/images/bg.png")' }}>
      <div className="absolute inset-0 bg-white/90 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10" data-aos="zoom-in">
          <h1 className="text-primary-blue text-4xl m-0 font-syne font-bold">Phase Of Development</h1>
          <p className="mb-0">Here’s what we do best</p>
          <AnimatedBar />
        </div>

        <div className="relative mx-auto max-w-5xl py-0 md:py-[100px]">
          {/* Main vertical line */}
          <span className="hidden md:block absolute left-1/2 w-[2px] h-full bg-[#e9e9e9] transform -translate-x-1/2 origin-top" data-aos="zoom-in"></span>
          
          <div className="flex flex-col gap-24 md:gap-32">
            {phases.map((phase, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row relative items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Decorative dot on the central line */}
                  <div 
                    ref={el => lineRefs.current[index] = el}
                    className="hidden md:block absolute top-1/2 left-1/2 w-[20px] h-[20px] bg-[#e5671a] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 transition-colors duration-500"
                  ></div>

                  <div className={`w-full md:w-1/2 px-4 md:px-16 mb-8 md:mb-0 flex justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`} data-aos={isEven ? "fade-left" : "fade-right"}>
                    {phase.icon}
                  </div>

                  <div className={`w-full md:w-1/2 px-4 md:px-16 relative flex flex-col justify-center text-center ${isEven ? 'md:text-right' : 'md:text-left'}`} data-aos="fade-up">
                    <div className="relative z-10 inline-block">
                      <span 
                        className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0' : 'left-0'} m-0 font-syne text-[150px] md:text-[235px] font-medium z-0 opacity-20 leading-none`}
                        style={{
                          background: 'linear-gradient(-90deg, #e5671a 0, #e5671a 50%, #2a64a5 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          transform: isEven ? 'translate(30%, -50%)' : 'translate(-20%, -50%)'
                        }}
                      >
                        {phase.count}
                      </span>
                      <h4 className="relative z-10 font-syne font-medium text-[45px] md:text-[60px] m-0 mb-4 text-[#1a1a1a]">{phase.title}</h4>
                      <p className="relative z-10 text-[#666] text-[15px] leading-relaxed max-w-sm mx-auto md:mx-0">{phase.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhaseOfDevelopment;
