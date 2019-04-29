import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';

class Header extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.header}>
        <Logo />
        <Menu>
          <MenuItem>Become a Host</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>Log In</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Header;
