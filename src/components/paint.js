import React from 'react';

import styles from './paint.css';

const Paint = props => {
  return (
    <div
      className={styles[props.color] + (props.chosen? ' ' + styles.chosen: '')}
      style={props.chosen? {transform: `rotate(${props.i*-90}deg)`}: {}}
      onClick={props.onClick}>
    </div>
  );
};

export default Paint;
