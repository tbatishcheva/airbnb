import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './StoryBlock.module.css';

class StoryBlock extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={styles.storyBlock}>{this.props.children}</div>
    );
  }
}

export default StoryBlock;
