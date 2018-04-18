import React from 'react'
import Logo from './components/logo';
import Title from './components/title';
import Navigation from './components/navigation';
import styles from './header.module.scss';

const Header = ({siteTitle, logo, config: { styles = {}, ...config }}) => (
    <header style={{marginBottom: '1.45rem', ...styles}}>
        <div className={styles.nav}>
            <Logo {...logo}/>
            <Title title={siteTitle}/>
            <Navigation/>
        </div>
    </header>
);

export default Header