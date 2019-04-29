import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderWithCategoryAndPlace.module.css';

class HeaderWithCategoryAndPlace extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.header}>
        <span>{this.props.category}</span> · <span>{this.props.place}</span>
      </div>
    );
  }
}

export default HeaderWithCategoryAndPlace;
