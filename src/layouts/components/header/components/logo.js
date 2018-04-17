import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styles from '../header.module.scss';

const Logo = ({ image }) => (
    <div className={styles.logo}>
        <Img resolutions={image.resolutions} />
    </div>
);

Logo.propTypes = {
    image: PropTypes.object
};

export default Logo;