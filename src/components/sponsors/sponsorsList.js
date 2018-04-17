import React from 'react';
import {compose, get, map, memoize, groupBy, orderBy, first} from "lodash/fp";

const parseSponsors = data => memoize(compose(
    map(list => orderBy('start', ['asc'], list)),
    groupBy('conferenceDay'),
    map('talk.data.frontmatter'),
    get('list'))
)(data);

const SponsorsList = ({ sponsors }) => {

    return (
        <div>sponsors</div>
    );
};

export default SponsorsList;