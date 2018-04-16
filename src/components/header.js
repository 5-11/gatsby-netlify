import React from 'react'
import Logo from './logo/Logo';
import Link from 'gatsby-link'

const ListLink = props => (
    <li style={{display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>
);

const Header = ({siteTitle, logo}) => (
    <div style={{ background: 'rebeccapurple', marginBottom: '1.45rem', }}>
        <div style={{ margin: '0 auto', maxWidth: 960, padding: '1.45rem 1.0875rem', }}>
            <h1 style={{margin: 0}}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <Logo {...logo}/>
                    {siteTitle}
                </Link>
                <ul style={{listStyle: `none`, float: `right`}}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </h1>
        </div>
    </div>
);

export default Header
