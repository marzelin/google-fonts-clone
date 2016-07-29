import React from 'react';

import styles from './searchPanel.css';
import SearchIcon from '../svg/searchIcon';
import Categories from './categories';
import Slider from './slider';

const SearchPanel = props => {
  return (
    <div className={props.open? styles.open: styles.default}>
      <h1
        className={styles.heading}>
        <SearchIcon
          className={styles.searchIcon}/>
        <input
          className={styles.searchInput}
          onChange={(event) =>
            props.changeFilter('name', event.target.value)}
          placeholder="Search"/>
      </h1>
      <div className={styles.content}>
        <Categories
          onChange={(value) => props.changeFilter('categories', value)}/>
        <Slider
          name="Number of styles"
          max="18"
          onChange={(value) => props.changeFilter('num of styles', value)}
          showInfo={true}/>
        <Slider
          name="Thickness"
          max="10"
          onChange={(value) => props.changeFilter('thickness', value)}/>
        <Slider
          name="Slant"
          max="10"
          onChange={(value) => props.changeFilter('slant', value)}/>
        <Slider
          name="Width"
          max="10"
          onChange={(value) => props.changeFilter('width', value)}/>
      </div>
    </div>
  );
};

export default SearchPanel;
