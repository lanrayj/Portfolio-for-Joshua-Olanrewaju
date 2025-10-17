
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

type Tab = 'education' | 'experience' | 'skills';

const Resume: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('experience');

    const renderContent = () => {
        switch (activeTab) {
            case 'education':
                return (
                    <div className="space-y-8">
                        <ResumeItem year="2022-2023" title="Masters in Business Administration (MBA)" institution="University Canada West" description="Completed an intensive graduate program focused on developing advanced business management, leadership, and strategic decision-making skills." />
                        <ResumeItem year="2012-2017" title="Bachelors in Computer Engineering" institution="University Of Benin" description="Received comprehensive academic and practical training in problem-solving, system design, and the application of engineering principles to develop solutions in computing and networking." />
                        <ResumeItem year="2008-2010" title="Diploma in Maritime & ICT" institution="University of Benin" description="Acquired foundational knowledge in maritime operations combined with modern ICT skills, focusing on shipping logistics, port management, and digital communication." />
                    </div>
                );
            case 'experience':
                return (
                    <div className="space-y-8">
                        <ResumeItem year="2025 – Present" title="Cybersecurity Analyst" institution="Amdari Inc. | Edmonton, AB" description="Focused on threat detection, vulnerability management, and incident response. Built custom SIEM correlation rules reducing false positives by 25% and enhanced executive threat visibility by 50%." />
                        <ResumeItem year="2019 – 2023" title="IT Manager / Systems & Security Administrator" institution="First Rivers Hospital | Port Harcourt, NG" description="Led enterprise IT security and infrastructure initiatives. Implemented multi-layered security controls, drove 100% EDR coverage, and automated security audits, cutting review times by 70%." />
                        <ResumeItem year="2017 – Present" title="IT Consulting & Digital Solutions" institution="Jooniq Technologies | Remote" description="Launched and scaled an IT consulting company. Delivered custom WordPress websites, SEO strategies, and cybersecurity consulting to enhance client growth and online visibility." />
                    </div>
                );
            case 'skills':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Professional Skills</h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>Threat Detection & Analysis</li>
                                <li>Penetration Testing & Vulnerability Scanning</li>
                                <li>Network Security & Firewalls (Cisco, Palo Alto)</li>
                                <li>Microsoft 365 & Azure Administration</li>
                                <li>Virtualization (VMware, Hyper-V)</li>
                                <li>SIEM (Splunk, QRadar) & EDR Solutions</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Leadership & Other Skills</h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>Project Management & Agile Methodologies</li>
                                <li>Web Development (WordPress, HTML, CSS, JS)</li>
                                <li>SEO & Digital Marketing Strategy</li>
                                <li>Cloud Hosting & Management</li>
                                <li>Client Relationship Management</li>
                                <li>Technical Mentorship & Team Leadership</li>
                            </ul>
                        </div>
                    </div>
                );
        }
    };
    
    const TabButton: React.FC<{ tab: Tab; label: string }> = ({ tab, label }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${activeTab === tab ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
        >
            {label}
        </button>
    );

    return (
        <section id="resume" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <SectionTitle subtitle="7+ Years of Experience" title="My Resume" />
                <div className="flex justify-center space-x-4 mt-8">
                    <TabButton tab="education" label="Education" />
                    <TabButton tab="experience" label="Experience" />
                    <TabButton tab="skills" label="Skills & Leadership" />
                </div>
                <div className="mt-12 text-left bg-gray-800 p-8 rounded-lg shadow-inner">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

const ResumeItem: React.FC<{ year: string; title: string; institution: string; description: string }> = ({ year, title, institution, description }) => (
    <div className="relative pl-8 border-l-2 border-cyan-500">
        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-900 border-2 border-cyan-500 rounded-full"></div>
        <p className="text-sm text-cyan-400 mb-1">{year}</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-md text-gray-400 mb-2">{institution}</p>
        <p className="text-gray-400">{description}</p>
    </div>
);


export default Resume;
