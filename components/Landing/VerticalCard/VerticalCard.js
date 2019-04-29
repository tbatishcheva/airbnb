import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './VerticalCard.module.css';

class VerticalCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    prepend: PropTypes.func,
    append: PropTypes.func,
  };

  static defaultProps = {
    img: null,
    prepend: null,
    append: null,
  };

  render() {
    return (
      <div className={styles.card}>
        <img className={styles.img} src={this.props.img} alt={this.props.name} />
        {this.props.prepend && (
          <div className={styles.prepend}>{this.props.prepend()}</div>
        )}
        <span className={styles.name}>{this.props.name}</span>
        {this.props.append && (
          <div className={styles.append}>{this.props.append()}</div>
        )}
      </div>
    );
  }
}

export default VerticalCard;
