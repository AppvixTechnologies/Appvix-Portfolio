import React from 'react';

const services = [
  {
    title: 'Web Design',
    description: 'We create a new website for you – A website that is interactive, engaging and targeted to your specific customers.',
    icon: <img src="/services/web-design.png" alt="Web Design" className="w-full h-[180px] object-contain mx-auto" />,
    animation: 'fade-right'
  },
  {
    title: 'Web Development',
    description: 'Appvix Technologies Pvt. Ltd. is a professional web development company, which excels in developing custom website design that convert.',
    icon: <img src="/services/web-development.png" alt="Web Development" className="w-full h-[180px] object-contain mx-auto" />,
    animation: 'fade-right'
  },
  {
    title: 'Branding',
    description: 'We take care of every step on your branding from picking the right colours to creating a mesmerizing design.',
    icon: <img src="/services/brand.png" alt="Branding" className="w-full h-[180px] object-contain mx-auto" />,
    animation: 'fade-left'
  },
  {
    title: 'Digital Marketing',
    description: 'Appvix Technologies Pvt.Ltd is the best choice when it comes to getting your business to soar to new heights in a digital world. Contact us today!',
    icon: <img src="/services/marketingnew.png" alt="Digital Marketing" className="w-full h-[180px] object-contain mx-auto" />,
    animation: 'fade-left'
  }
];

const AboutDevelopment = () => {
  return (
    <section className="bg-[#f4f6f9] py-[85px] relative z-10 -mt-[120px] md:-mt-[80px]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-wrap -mx-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0"
              data-aos={service.animation}
            >
              <div className="bg-white p-6 rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-start text-center h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-6">
                  {service.icon}
                </div>
                <div data-aos="zoom-in">
                  <h4 className="text-primary-orange m-0 pb-3 text-center text-[22px] font-bold font-syne border-b-[2px] border-primary-orange">
                    {service.title}
                  </h4>
                  <p className="text-gray-txt m-0 mt-5 text-[14px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDevelopment;
