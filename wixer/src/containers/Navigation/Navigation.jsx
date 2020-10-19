import React, { useState } from "react";
import logo from "../../images/logo.svg";
import styles from "./Navigation.module.scss";
import Navbar from "../../components/navbar/navbar";
import Menu from "../../components/menu/menu"

const Navigation = (props) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };
  return (
    <div className={styles.navigationContainer}>
      <img className={styles.logoImage} src={logo} alt="logo" />
      <Navbar onClick={toggleMenuHandler} />
      {isMenuOpen ? <Menu onClick={toggleMenuHandler} /> : null}
    </div>
  );
};

export default Navigation;
