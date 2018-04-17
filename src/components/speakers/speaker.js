import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from './speakers.module.scss';

const Speaker = ({ avatar: {src}, name, title, company }) => {
    return (
        <div className={styles.speakerContainer}>
            <Img sizes={src.sizes} className={styles.image}/>
            <div className={styles.about}>
                <h2 className={styles.name}>{name}</h2>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.company}>{company}</h4>
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