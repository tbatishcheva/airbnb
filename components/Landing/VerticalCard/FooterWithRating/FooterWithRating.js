import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './FooterWithRating.module.css';
import star from './star.svg';

class FooterWithRating extends Component {
  static propTypes = {
    price: PropTypes.number,
    rating: PropTypes.number,
    commentsCount: PropTypes.number,
  };

  render() {
    const stars = [];
    for (let i = 0; i < this.props.rating; i++) {
      stars.push(<img src={star} alt="Star" className={styles.star} />);
    }

    return (
      <div className={styles.footer}>
        <div className={styles.price}>${this.props.price} per person</div>
        <div className={styles.ratingAndCommentsWrapper}>
          <div className={styles.rating}>
            {stars}
          </div>
          <div className={styles.commentsCount}>{this.props.commentsCount}</div>
        </div>
      </div>
    );
  }
}

export default FooterWithRating;
