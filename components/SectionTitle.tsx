
import React from 'react';

interface SectionTitleProps {
    subtitle: string;
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title }) => {
    return (
        <div className="text-center">
            <p className="text-cyan-400 uppercase tracking-wider">{subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{title}</h2>
        </div>
    );
};

export default SectionTitle;
