
import React from 'react';
import SectionTitle from './SectionTitle';
import { Github, Linkedin, Twitter } from './Icons';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="Contact" title="Contact With Me" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {/* Left Column */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <img src="https://picsum.photos/seed/joshua/100/100" alt="Joshua Olanrewaju" className="w-24 h-24 rounded-full mr-6 border-4 border-cyan-500" />
                            <div>
                                <h3 className="text-2xl font-bold text-white">Joshua Olanrewaju</h3>
                                <p className="text-gray-400">IT & Cybersecurity Professional</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            I am available for work. Connect with me via my email below or find me on social media.
                        </p>
                        <div className="space-y-4">
                            <p className="text-gray-300"><span className="font-bold text-white">Email:</span> contact@joshuaolanrewaju.com</p>
                            <p className="text-gray-300"><span className="font-bold text-white">Availability:</span> Max 2 hours response time</p>
                        </div>
                        <div className="mt-6">
                            <a 
                                href="https://calendly.com/joshualanre/30-minutes-consultation-with-joshua-olanrewaju"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                            >
                                SCHEDULE A CONSULTATION
                            </a>
                        </div>
                        <div className="mt-8">
                            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Find with me</h4>
                            <div className="flex space-x-4">
                               <a href="#" className="p-3 bg-gray-700 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"><Linkedin /></a>
                               <a href="#" className="p-3 bg-gray-700 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"><Github /></a>
                               <a href="#" className="p-3 bg-gray-700 rounded-lg text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"><Twitter /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" placeholder="Your Name" className="w-full bg-gray-900 text-white p-3 rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-cyan-500 outline-none" />
                                <input type="text" placeholder="Phone Number" className="w-full bg-gray-900 text-white p-3 rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-cyan-500 outline-none" />
                            </div>
                            <div className="mt-6">
                                <input type="email" placeholder="Email" className="w-full bg-gray-900 text-white p-3 rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-cyan-500 outline-none" />
                            </div>
                            <div className="mt-6">
                                <input type="text" placeholder="Subject" className="w-full bg-gray-900 text-white p-3 rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-cyan-500 outline-none" />
                            </div>
                            <div className="mt-6">
                                <textarea placeholder="Your Message" rows={5} className="w-full bg-gray-900 text-white p-3 rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-cyan-500 outline-none"></textarea>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
