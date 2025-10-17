
import React from 'react';

const iconProps = {
    className: "w-6 h-6",
    strokeWidth: 2,
};

export const Menu: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

export const X: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const featureIconProps = {
    className: "w-10 h-10",
    strokeWidth: 1.5,
};

export const Shield: React.FC = () => (
    <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

export const Code: React.FC = () => (
    <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m9 0l3-2.25-3-2.25M12 21V3" />
    </svg>
);

export const Server: React.FC = () => (
    <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0h13.5m-13.5 0a3 3 0 00-3 3v.75a3 3 0 003 3h13.5a3 3 0 003-3v-.75a3 3 0 00-3-3" />
    </svg>
);

export const TrendingUp: React.FC = () => (
    <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M21 12l-2.25-3.75" />
    </svg>
);

export const Brush: React.FC = () => (
    <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.47 2.118L2.25 12l6.532-6.532a2.25 2.25 0 012.118-2.47 3 3 0 001.128-5.78 3 3 0 00-1.128-5.78l-6.532 6.532 12 12 6.532-6.532c.39-.39.39-1.023 0-1.414l-2.121-2.121a1 1 0 00-1.414 0l-2.121 2.121a1 1 0 00-.293.707v3.536a1 1 0 01-1 1h-3.536a1 1 0 01-.707-.293z" />
    </svg>
);

export const Briefcase: React.FC = () => (
    <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.098a2.25 2.25 0 01-2.25 2.25h-13.5a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h3.75m10.5 0a2.25 2.25 0 00-2.25-2.25h-3.75a2.25 2.25 0 00-2.25 2.25M10.5 14.25L12 12m0 0l1.5 2.25M12 12l-1.5 2.25M12 12l1.5-2.25M12 12l-1.5-2.25" />
    </svg>
);

export const Figma: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21a9 9 0 110-18 9 9 0 010 18z" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 9a3 3 0 01-6 0 3 3 0 00-3 3 3 3 0 003 3h3v3a3 3 0 006 0 3 3 0 00-3-3h-3V9z" fill="currentColor"/>
    </svg>
);

export const Invision: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3a9 9 0 00-9 9c0 4.162 2.836 7.665 6.744 8.695.5.083.625-.219.625-.469v-1.72c-2.75.584-3.333-1.313-3.333-1.313-.458-1.146-1.125-1.458-1.125-1.458-.917-.625.083-.583.083-.583 1 .083 1.542 1.042 1.542 1.042.917 1.542 2.375 1.083 2.958.833.083-.667.375-1.083.667-1.333-2.25-.25-4.583-1.125-4.583-5 0-1.083.375-2 .958-2.75-.083-.25-.417-1.333.083-2.75 0 0 .833-.25 2.75 1 .833-.25 1.75-.333 2.583-.333.833 0 1.75.083 2.583.333 1.917-1.25 2.75-1 2.75-1 .5 1.417.167 2.5.083 2.75.625.75 1 1.667 1 2.75 0 3.875-2.333 4.75-4.583 5 .375.333.708.917.708 1.833v2.75c0 .25.125.542.625.458C18.164 19.665 21 16.162 21 12a9 9 0 00-9-9z" fill="currentColor" />
    </svg>
);

export const Linkedin: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const Github: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.034c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

export const Twitter: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.69.188-1.452.23-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.588-7.52 2.588-1.258 0-2.486-.074-3.703-.217 2.684 1.725 5.875 2.73 9.342 2.73 11.21 0 17.344-9.29 17.344-17.345 0-.265-.006-.528-.018-.79 1.18-.853 2.208-1.913 3.023-3.127z"/>
    </svg>
);

