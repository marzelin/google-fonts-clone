import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './app.css';

import {
  openMenuPanel, closeMenuPanel,
  openSearchPanel, closeSearchPanel,
  openThemeChooser, closeThemeChooser,
  changeFilter
} from '../actions/actionCreators';
import BackDrop from './backDrop';
import Navbar from './navbar';
import MenuPanel from './menuPanel';
import SearchPanel from './searchPanel';
import ThemeChooser from './themeChooser';
import BackDropTransparent from './backDropTransparent';
import FontList from './fontList';

const App = props => {
  return (
    <div>
      <BackDrop
        onClick={()=> {
          props.menuPanelOpened?
            props.closeMenuPanel():
            props.closeSearchPanel()
        }}
        show={props.menuPanelOpened || props.searchPanelOpened}/>
      <Navbar
        searchPanelOpened={props.searchPanelOpened}
        onMenuButtonClick={props.openMenuPanel}
        onSearchButtonClick={props.searchPanelOpened?
          props.closeSearchPanel:
          props.openSearchPanel}
        onThemeButtonClick={props.openThemeChooser}/>
      <MenuPanel
        open={props.menuPanelOpened}/>
      <SearchPanel
        open={props.searchPanelOpened}
        changeFilter={props.changeFilter}/>
      <ThemeChooser/>
      <BackDropTransparent
        onClick={props.closeThemeChooser}
        show={props.themeChooserOpened}/>
      <FontList
        fonts={props.fonts}
        filters={props.filters}
        searchPanelOpened={props.searchPanelOpened}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menuPanelOpened: state.menuPanelOpened,
    searchPanelOpened: state.searchPanelOpened,
    themeChooserOpened: state.themeChooserOpened,
    theme: state.theme,
    fonts: state.fonts,
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({openMenuPanel, closeMenuPanel,
    openSearchPanel, closeSearchPanel,
    openThemeChooser, closeThemeChooser,
    changeFilter}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
