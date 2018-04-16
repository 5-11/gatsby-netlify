import React from 'react';
import PropTypes from 'prop-types';
import Speaker from './speaker';
import {compose, get, map, memoize} from "lodash/fp";

const parseSpeakers = data => memoize(compose(map('speaker.data.frontmatter'), get('list')))(data);

const SpeakersList = ({ speakers }) => {
    const speakersList = parseSpeakers(speakers);

    return(
        <div>
            <h1>Speakers</h1>
            <hr/>
            {speakersList.map((speaker, index) => <Speaker {...speaker} key={index}/>)}
        </div>
    );
};

SpeakersList.propTypes = {

};

export default SpeakersList;