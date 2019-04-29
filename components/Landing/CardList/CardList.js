import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CardList.module.css';

class CardList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    seeAllLink: PropTypes.string,
    columnCount: PropTypes.number,
  };

  static defaultProps = {
    children: null,
    seeAllLink: null,
    columnCount: 4,
  };

  render() {
    return (
      <div className={styles.cardList}>
        <div className={styles.header}>
          <div className={styles.title}>{this.props.title}</div>
          {this.props.seeAllLink && (
            <div className={styles.link}>
              <a href={this.props.seeAllLink}>See all ></a>
            </div>
          )}
        </div>
        <div className={styles.list} style={{ '--columns-count': this.props.columnCount }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CardList;
