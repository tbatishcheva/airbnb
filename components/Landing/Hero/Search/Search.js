import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';
import search from './search.svg';
import Button from '../../../Button/Button';

class Search extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.search}>
        <img src={search} alt="Search Icon" className={styles.icon} />
        <input type="search" className={styles.input} placeholder="Try “Osaka”" />
        <Button>Search</Button>
      </div>
    );
  }
}

export default Search;
