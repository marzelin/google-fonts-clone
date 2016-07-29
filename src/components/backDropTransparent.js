import React from 'react';

import styles from './backDropTransparent.css';

const BackDropTransparent = props => {
  return (
    <div
      className={props.show? styles.show: styles.default}
      onClick={props.onClick}
    >
    </div>
  );
};

export default BackDropTransparent;
