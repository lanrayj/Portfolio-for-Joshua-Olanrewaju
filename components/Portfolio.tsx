
import React from 'react';
import SectionTitle from './SectionTitle';

interface PortfolioCardProps {
    image: string;
    title: string;
    category: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, category }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-80 transition-all duration-500 flex flex-col justify-end p-6">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-cyan-400 text-sm">{category}</p>
                <h3 className="text-white text-xl font-bold mt-1">{title}</h3>
            </div>
        </div>
    </div>
);

const portfolioData = [
    {
        image: 'https://picsum.photos/seed/project1/600/400',
        title: 'OSINT Threat Intelligence Project',
        category: 'Noventa Technologies'
    },
    {
        image: 'https://picsum.photos/seed/project2/600/400',
        title: 'SOC Analysis Capstone Project',
        category: 'SoluTech'
    },
    {
        image: 'https://picsum.photos/seed/project3/600/400',
        title: 'Enhancing SOHO Network Security',
        category: 'Firewall Project'
    },
    {
        image: 'https://picsum.photos/seed/project4/600/400',
        title: 'The Fun Headquarters',
        category: 'Website Design'
    },
    {
        image: 'https://picsum.photos/seed/project5/600/400',
        title: 'Christ Embassy British Columbia',
        category: 'Website Design'
    },
    {
        image: 'https://picsum.photos/seed/project6/600/400',
        title: 'First Rivers Hospital',
        category: 'Website Design'
    },
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6 text-center">
                <SectionTitle subtitle="Visit my portfolio and keep your feedback" title="My Portfolio" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {portfolioData.map((item, index) => (
                        <PortfolioCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
