import React from 'react';

const Link = ({ children, href, blank, className = '' }) => {
    const linkProps = {
        href,
        className,
        ...(blank) ? { target: '_blank', rel:"noopener noreferrer" } : {}
    };

    return (
        <a {...linkProps}>
            {children}
        </a>
    )
};

export default Link;