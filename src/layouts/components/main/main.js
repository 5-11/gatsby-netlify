import React from 'react';

const Main = ({ children }) => {
    return (
        <main
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
            }}
        >
            {children}
        </main>
    )
};

export default Main;