import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./menu.module.scss";

const menu = (props) => {

  return (

    <React.Fragment>
      <div className={styles.overlay} onClick={props.onClick}/>
      <nav className={styles.menu}>
        <NavLink to="/day" activeClassName={styles.active} onClick={props.onClick}>
          Day
        </NavLink>
        <NavLink to="/week" activeClassName={styles.active} onClick={props.onClick}>
          Week
        </NavLink>
        <NavLink to="/month" activeClassName={styles.active} onClick={props.onClick}>
          Month
        </NavLink>
      </nav>
    </React.Fragment>
  );
};
export default menu;
