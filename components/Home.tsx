
import React, { useState, useEffect } from 'react';
import { Figma, Invision, Github, Linkedin, Twitter } from './Icons';

const roles = [
  'a Web & IT Specialist',
  'a Cybersecurity Analyst',
  'a Business Strategist'
];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);
  
  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
        setBlink(prev => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-24 md:pt-0">
      <div className="container mx-auto px-6 text-center">
        <span className="text-lg text-gray-400">Welcome to my world</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2">
          Hi, I’m <span className="text-cyan-400">Joshua Olanrewaju</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-300 mt-4 h-12">
          {`${roles[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 mt-6 text-lg">
          Security-driven IT Systems Administrator and Cybersecurity Analyst with over 6 years of experience delivering robust network protection, infrastructure reliability, and clinical IT support. Adept at developing and executing web-based solutions and digital assets that are secure, scalable, and user-centered.
        </p>
        
        <div className="mt-10">
            <a 
                href="https://calendly.com/joshualanre/30-minutes-consultation-with-joshua-olanrewaju"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 transform hover:scale-105"
            >
                Book a Consultation
            </a>
        </div>

        <div className="flex justify-center items-center mt-12 space-x-12">
            <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Find with me</h3>
                <div className="flex space-x-6">
                    <a href="#" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"><Linkedin /></a>
                    <a href="#" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"><Github /></a>
                    <a href="#" className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"><Twitter /></a>
                </div>
            </div>
            <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Best skill on</h3>
                 <div className="flex space-x-6">
                    <div className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"><Invision /></div>
                    <div className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"><Figma /></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
