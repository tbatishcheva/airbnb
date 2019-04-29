import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';

class Menu extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <div className={styles.menu}>{this.props.children}</div>
    );
  }
}

export default Menu;
