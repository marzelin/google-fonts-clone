import React from 'react';

import styles from './menuButton.css';
import HamburgerIcon from '../svg/hamburgerIcon';

const MenuButton = props => {
  return (
    <button
      className={styles.default}
      onClick={props.onClick}>
      <HamburgerIcon/>
    </button>
  );
};

export default MenuButton;
