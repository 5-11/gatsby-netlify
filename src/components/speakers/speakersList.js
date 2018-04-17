import React from 'react';
import PropTypes from 'prop-types';
import {compose, get, map, memoize} from "lodash/fp";
import styles from './speakers.module.scss'
import Speaker from './speaker';

const parseSpeakers = data => memoize(compose(map('speaker.data.frontmatter'), get('list')))(data);

const SpeakersList = ({ speakers }) => {
    const speakersList = parseSpeakers(speakers);

    return(
        <div className={styles.speakersListContainer}>
            <h1>Speakers</h1>
            <hr/>
            <div className={styles.speakersList}>
                {speakersList.map((speaker, index) => <Speaker {...speaker} key={index}/>)}
            </div>
        </div>
    );
};

SpeakersList.propTypes = {

};

export default SpeakersList;