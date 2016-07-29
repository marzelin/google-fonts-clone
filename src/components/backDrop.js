import React from 'react';

import styles from './backDrop.css';

const BackDrop = props => {
  return (
    <div
      className={props.show? styles.show: styles.default}
      onClick={props.onClick}
    >
    </div>
  );
};

export default BackDrop;
