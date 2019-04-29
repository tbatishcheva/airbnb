import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './Logo.module.css';

class Logo extends Component {
  render() {
    return (
      <a href="#" className={styles.logo}><img src={logo} alt="AirBnB" /></a>
    );
  }
}

export default Logo;
