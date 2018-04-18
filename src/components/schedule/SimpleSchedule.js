import React from 'react';
import PropTypes from 'prop-types';
import ConferenceDay from './components/conferenceDay';
import {compose, get, map, memoize, groupBy, orderBy} from "lodash/fp";
import styles from './schedule.module.scss';


const parseSchedule = data => memoize(compose(
    map(list => orderBy('start', ['asc'], list)),
    groupBy('conferenceDay'),
    map('talk.data.frontmatter'),
    get('list'))
)(data);

const ScheduleList = ({ schedule }) => {
    const scheduleList = parseSchedule(schedule);

    return (
        <div className={styles.scheduleContainer}>
            <h1>Schedule</h1>
            <div className="grid">
                <div className="row">
                    {scheduleList.map((conferenceDay, index) => (
                        <ConferenceDay conferenceDay={conferenceDay} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScheduleList;
