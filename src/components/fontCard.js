import React from 'react';

import styles from './fontCard.css';

const FontCard = (props) => {
  return (
    <div className={styles.default}>
      <p className={styles.name}>{props.name}</p>
      <p
        className={styles.author}>
        {props.author} ({props.numOfFonts} style
          {props.numOfFonts > 1? 's':''})
      </p>
      <div className={styles.options}>
      </div>
      <p
        className={styles.showcase}>
        {props.showcaseText ||
          'Almost before we knew it, we had left the ground.'}
      </p>
    </div>
  );
};

export default FontCard;
