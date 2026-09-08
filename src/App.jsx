import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Banner from './components/Banner';
import AboutDevelopment from './components/AboutDevelopment';
import PhaseOfDevelopment from './components/PhaseOfDevelopment';
import CoreServices from './components/CoreServices';
import CreativeSolutions from './components/CreativeSolutions';
import OurTechnology from './components/OurTechnology';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 3000,
    });
  }, []);

  return (
    <div className="font-inter">
      <Banner />
      <AboutDevelopment />
      <PhaseOfDevelopment />
      <CoreServices />
      <CreativeSolutions />
      <OurTechnology />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
