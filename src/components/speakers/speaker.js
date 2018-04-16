import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from './styles.module.css';

const Speaker = ({ avatar: {src}, name, title, company }) => {
    return (
        <div className={styles.speakerContainer}>
            <Img sizes={src.sizes} className={styles.image}/>
            <div>
                <h2>{name}</h2>
                <h3>{title}</h3>
                <h4>{company}</h4>
            </div>
        </div>
    );
};

Speaker.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    company: PropTypes.string,
};

export default Speaker;