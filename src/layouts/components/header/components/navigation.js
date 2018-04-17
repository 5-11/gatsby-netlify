import React from 'react';
import Link from 'gatsby-link'
import styles from '../header.module.scss';

const ListLink = props => (
    <li style={{display: `inline-block`, marginRight: `1rem`, marginBottom: 0}}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>
);

const Navigation = () => {
    return (
        <ul style={{listStyle: `none`, float: `right`, margin: 0}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
    );
};

export default Navigation;