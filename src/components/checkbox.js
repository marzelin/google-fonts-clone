import React from 'react';

import styles from './checkbox.css';

var checked = false;

const Checkbox = (props) => {
  return (
    <div
      className={props.checked? styles.checked: styles.default}
      onClick={props.onClick}>
    </div>
  );
};

export default Checkbox;
