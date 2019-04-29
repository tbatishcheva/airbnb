import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';
import Search from "./Search/Search";

class Hero extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.hero}>
        <h1 className={styles.title}>Airbnb</h1>
        <div className={styles.subtitle}>Book unique homes and experience a city like a local.</div>
        <div className={styles.searchWrapper}>
          <Search />
        </div>
      </div>
    );
  }
}

export default Hero;
