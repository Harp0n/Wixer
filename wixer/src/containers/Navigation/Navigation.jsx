import React from 'react';
import logo from '../../images/logo.svg';
import styles from './Navigation.module.scss';
import Navbar from '../../components/navbar/navbar'; 
const Navigation = () => {
    return (
        <div className={styles.navigationContainer}>
            <img className={styles.logoImage} src={logo} alt="logo" />
            <Navbar />
        </div>
    )
}

export default Navigation; 