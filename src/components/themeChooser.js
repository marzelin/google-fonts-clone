import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {chooseTheme, closeThemeChooser} from '../actions/actionCreators';

import styles from './themeChooser.css';

import Paint from './paint';

const ThemeChooser = props => {
  let colors = ['black', 'white', 'yellow', 'blue'];
  const i = colors.indexOf(props.theme);
  colors = colors.map((color, i) => {
    return (
      <Paint
        color={color}
        key={i}
        i={i}
        chosen = {color === props.theme}
        onClick={()=> {
          props.chooseTheme(color);
          setTimeout(props.closeThemeChooser, 300);
        }}/>
    );
  });
  return (
    <div className={props.open?
      (props.searchOpen? styles.openPush: styles.open):
      styles.default}>
      <div
        className={styles.rotate}
        style={{transform: `rotate(${i*90}deg)`}}>
        {colors}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.themeChooserOpened,
    searchOpen: state.searchPanelOpened,
    theme: state.theme
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    chooseTheme,
    closeThemeChooser
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeChooser);
