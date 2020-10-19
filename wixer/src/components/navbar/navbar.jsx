import React from 'react'
import navbarIcon from '../../images/menu.svg'; 
import styles from './navbar.module.scss';
const navbar = () => {
    return (
        <div className={styles.navbar}><img src={navbarIcon} alt=''/></div>
    )
}
export default navbar; 