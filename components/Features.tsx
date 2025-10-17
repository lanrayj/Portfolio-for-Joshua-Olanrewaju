
import React from 'react';
import { Shield, Code, Server, TrendingUp, Brush, Briefcase } from './Icons';
import SectionTitle from './SectionTitle';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300">
        <div className="text-cyan-400 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const featuresData = [
    {
        icon: <Shield />,
        title: "Cybersecurity Analysis",
        description: "I specialize in helping businesses protect their digital assets through threat assessment, risk mitigation, vulnerability scanning, and security awareness training."
    },
    {
        icon: <Code />,
        title: "Web Development",
        description: "I craft clean, intuitive, mobile-friendly websites that communicate your value clearly. My designs are not only beautiful—they're also strategic and user-centered."
    },
    {
        icon: <Server />,
        title: "IT Support",
        description: "Whether you're managing servers, networks, or cloud environments, I provide expert-level guidance and hands-on support to keep your systems running efficiently."
    },
    {
        icon: <TrendingUp />,
        title: "SEO Optimisation",
        description: "I implement SEO strategies that improve your website’s ranking, drive organic traffic, and get your business found by the right audience."
    },
    {
        icon: <Brush />,
        title: "Branding & Identity",
        description: "I help brands define who they are and how they’re perceived. Through logo design, visual identity, and messaging, I craft branding that resonates and sets you apart."
    },
    {
        icon: <Briefcase />,
        title: "Business Strategy",
        description: "With a deep background in tech and business operations, I provide services that help you make informed decisions, improve efficiency, and build for the future."
    },
];

const Features: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <SectionTitle subtitle="Features" title="What I Do" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {featuresData.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
