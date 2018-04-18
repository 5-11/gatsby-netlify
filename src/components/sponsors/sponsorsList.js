import React from 'react';
import {compose, get, map, memoize, groupBy, orderBy, first} from "lodash/fp";
import SponsorsGrid from './sponsorsGrid';
import styles from './sponsors.module.scss';

const parseSponsors = data => memoize(compose(
    map(list => orderBy('position', ['asc'], list)),
    groupBy('group'),
    map('sponsor.data.frontmatter'),
    get('list'))
)(data);

const SponsorsList = ({ sponsors }) => {
    const sponsorsList = parseSponsors(sponsors);

    return (
        <div className={`${styles.sponsorsGrid} container`}>
            <div className="grid">
                {sponsorsList.map((groupedSponsors , index) => (
                    <SponsorsGrid key={index} sponsors={groupedSponsors}/>
                ))}
            </div>
        </div>
    );
};

export default SponsorsList;