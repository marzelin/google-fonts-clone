import React from 'react';

import styles from './links.css';

const Links = props => {
  return (
    <ul className={props.push? styles.push: styles.default}>
      <li>Home</li>
      <li>About</li>
      <li>Directory</li>
    </ul>
  );
}

export default Links;
