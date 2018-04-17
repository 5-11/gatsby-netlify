import React from 'react';
import PropTypes from 'prop-types';
import initSchedule from './initSchedule';
import { compose, map, reduce } from 'lodash/fp';
import { filterTimeFormat } from "./initSchedule";
import './styles/style.scss';

class ScheduleList extends React.Component {

    constructor(props) {
        super(props);

        this.times = compose(
            (data) => {
                return {
                    data,
                    min: data.reduce((min, { start }) => min > start ? start : min, data[0].start),
                    max: data.reduce((max, { end }) => max > end ? max : end, data[0].end),
                };
            },
        )(this.props.schedule);

        console.log(this.times, 'times');
    }

    componentDidMount() {
        initSchedule();
    }

    buildTimeline = () => {
        let current = this.times.min;
        let timeline = [current];
        while (current < this.times.max) {
            const parts = current.split(':');
            current =
            timeline.push()
        }
    };

    render() {
        console.log(this.props.schedule, 'scheduče');
        return (
            <div className="schedule-list">
                <div className="cd-schedule loading">
                    <div className="timeline">
                        <ul>
                            <li><span>09:00</span></li>
                            <li><span>09:15</span></li>
                            <li><span>09:30</span></li>
                            <li><span>09:45</span></li>
                            <li><span>10:00</span></li>
                            <li><span>10:15</span></li>
                            <li><span>10:30</span></li>
                            <li><span>10:45</span></li>
                            <li><span>11:00</span></li>
                            <li><span>11:15</span></li>
                            <li><span>11:30</span></li>
                            <li><span>14:30</span></li>
                            <li><span>15:00</span></li>
                            <li><span>15:30</span></li>
                            <li><span>16:00</span></li>
                            <li><span>16:30</span></li>
                            <li><span>17:00</span></li>
                            <li><span>17:30</span></li>
                            <li><span>18:00</span></li>
                        </ul>
                    </div>
                    <div className="events">
                        <ul>
                            <li className="events-group">
                                <div className="top-info"><span>Friday (27.10.), Opatija</span></div>

                                <ul>
                                    {this.props.schedule.map((talk, index) => (
                                        <li key={index} className="single-event" data-start={talk.start} data-end={talk.end}
                                            data-content={talk.title} data-event={`event-${index}`}>
                                            <a href="#0">
                                                <em className="event-name">{talk.title}</em>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/*<li className="events-group">
                                <div className="top-info"><span>Saturday (28.10.), Rijeka</span></div>

                                <ul>
                                    <li className="single-event" data-start="10:00" data-end="11:00"
                                        data-content="event-rowing-workout" data-event="event-2">
                                        <a href="#0">
                                            <em className="event-name">Rowing Workout</em>
                                        </a>
                                    </li>

                                    <li className="single-event" data-start="11:30" data-end="13:00"
                                        data-content="event-restorative-yoga" data-event="event-4">
                                        <a href="#0">
                                            <em className="event-name">Restorative Yoga</em>
                                        </a>
                                    </li>

                                    <li className="single-event" data-start="13:30" data-end="15:00"
                                        data-content="event-abs-circuit" data-event="event-1">
                                        <a href="#0">
                                            <em className="event-name">Abs Circuit</em>
                                        </a>
                                    </li>

                                    <li className="single-event" data-start="15:45" data-end="16:45"
                                        data-content="event-yoga-1" data-event="event-3">
                                        <a href="#0">
                                            <em className="event-name">Yoga Level 1</em>
                                        </a>
                                    </li>
                                </ul>
                            </li>*/}

                        </ul>
                    </div>

                    <div className="event-modal">
                        <header className="header">
                            <div className="content">
                                <span className="event-date"></span>
                                <h3 className="event-name"></h3>
                            </div>

                            <div className="header-bg"></div>
                        </header>

                        <div className="body">
                            <div className="event-info"></div>
                            <div className="body-bg"></div>
                        </div>

                        <a href="#0" className="close">Close</a>
                    </div>

                    <div className="cover-layer"></div>

                </div>
            </div>
        );
    }
};

export default ScheduleList;