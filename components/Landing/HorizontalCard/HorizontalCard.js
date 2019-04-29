import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HorizontalCard.module.css';

class HorizontalCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
  };

  static defaultProps = {
    img: null,
  };

  render() {
    return (
      <div className={styles.card}>
        <img className={styles.img} src={this.props.img} alt={this.props.name} />
        <span className={styles.name}>{this.props.name}</span>
      </div>
    );
  }
}

export default HorizontalCard;
