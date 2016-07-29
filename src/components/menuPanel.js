import React from 'react';
import {connect} from 'react-redux';

import styles from './menuPanel.css';

const MenuPanel = props => {
  return (
    <div className={props.open? styles.open : styles.default}>
      <h1 className={styles.heading}>Menu Panel</h1>
      <ul>
        <li>About</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default MenuPanel;
