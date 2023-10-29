import React, { useEffect, useState } from 'react';
import './App.css';
import Preloader from './components/preloader/Preloader';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Certification from './components/certifications/Certification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 3 seconds (adjust as needed)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <main className='main'>
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Certification />
            <Contact />

            {/* <Services /> */}
            {/* <Work /> */}
            {/* <Testimonials /> */}
          </main>

          <Footer />
          <ScrollUp />
        </>
      )}
    </div>
  );
};

export default App;