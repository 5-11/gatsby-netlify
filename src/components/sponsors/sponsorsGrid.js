import React from 'react';
import {first, get} from "lodash/fp";
import Img from 'gatsby-image';
import Link from './../link';
import styles from './sponsors.module.scss';

const SponsorsGrid = ({ sponsors = [] }) => {
    const groupName = get('group', first(sponsors));

    return (
        <div className="row">
            <div className="column">
                {groupName && <h1>{groupName}</h1>}
                <hr/>
                <div className={styles.sponsorsList}>
                    {sponsors.map(({url, name, logo, ...rest}, index) => (
                        <div className={styles.sponsorContainer} key={index}>
                            <Link href={url} className={styles.sponsor} blank>
                                {logo.src && <Img sizes={logo.src.sizes} className={styles.image}/>}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SponsorsGrid;