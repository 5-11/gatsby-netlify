import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Logo = ({ image }) => (
    <div>
        <Img resolutions={image.resolutions} />
    </div>
);

Logo.propTypes = {
    image: PropTypes.object
};

export default Logo;