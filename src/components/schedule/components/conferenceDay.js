import React from 'react';
import PropTypes from 'prop-types';
import styles from '../schedule.module.scss';
import { get, first } from 'lodash/fp';


const ConferenceDay = ({ conferenceDay }) => {

    return (
        <div className="column">
            <h2 style={{textAlign: 'center'}}>{get('conferenceDay', first(conferenceDay))}</h2>
            <div className="day-list">
                <table>
                    <tbody>
                    {conferenceDay.map(({start, end, speaker, talkName}, index) => (
                        <tr key={index}>
                            <td className={styles.time}>{`${start} - ${end}`}</td>
                            <td>
                                <h4 className={styles.talkName}>{talkName}</h4>
                                {speaker && speaker}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConferenceDay;
