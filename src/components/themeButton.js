import React from 'react';

import styles from './themeButton.css';
import ThemeIcon from '../svg/bucketIcon';

const ThemeButton = props => {
  return (
    <button
      onClick={props.onClick}
      className={props.push? styles.push: styles.default}>
      <ThemeIcon/>
    </button>
  );
};

export default ThemeButton;
