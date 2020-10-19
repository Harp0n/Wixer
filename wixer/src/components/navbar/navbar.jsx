import React from "react";
import navbarIcon from "../../images/menu.svg";
import styles from "./navbar.module.scss";
const navbar = (props) => {
  return (
    <div className={styles.navbar} onClick={props.onClick}>
      <img src={navbarIcon} alt="" />
    </div>
  );
};
export default navbar;
