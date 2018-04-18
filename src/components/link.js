import React from 'react';

const LinkComponent = ({ children, href, blank, className = '' }) => {
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

export const Link = LinkComponent;

export default LinkComponent;