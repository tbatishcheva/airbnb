import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuItem.module.css';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <div className={styles.menuItem}>{this.props.children}</div>
    );
  }
}

export default MenuItem;
