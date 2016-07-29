import React from 'react';

import styles from './searchButton.css';
import SearchIcon from '../svg/searchIcon';
import PushRightIcon from '../svg/pushRightIcon';

const SearchButton = props => {
  return (
    <button
      className={props.push? styles.push: styles.default}
      onClick={props.onClick}>
      {props.push? <PushRightIcon/> : <SearchIcon/>}
    </button>
  );
};

export default SearchButton;
