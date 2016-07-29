import React from 'react';

import styles from './categories.css';
import Checkbox from './checkbox';

const Categories = React.createClass({
  getInitialState() {
    return {
      categories: ['Serif', 'Sans Serif', 'Display',
        'Handwriting', 'Monospace'],
      selected: ['Serif', 'Sans Serif', 'Display',
        'Handwriting', 'Monospace']
    }
  },
  render() {
    const categories = this.state.categories.map((category, i) => {
      return (
        <div
          className={styles.category}
          key={i}
          onClick={()=> {
            let newSelected = this.state.selected.includes(category)?
              this.state.selected.filter(c => c !== category):
              this.state.selected.concat(category);
              this.props.onChange(newSelected);
              this.setState({
                selected: newSelected
              })}}>
          <Checkbox
            checked={this.state.selected.includes(category)}/>
          {category}
        </div>
      );
    });
    return (
      <div className={styles.default}>
        <p>Categories</p>
        {categories}
      </div>
    );
  }
});

export default Categories;
