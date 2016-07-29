import React from 'react';

import styles from './navbar.css';

import MenuButton from './menuButton';
import Logo from './logo';
import Links from './links';
import ThemeButton from './themeButton';
import SearchButton from './searchButton';

const Navbar = React.createClass({
  getInitialState() {
    return {
      isAbove: false
    };
  },
  componentDidMount() {
    window.addEventListener('scroll', e => {
      if (this.state.isAbove && !window.scrollY) {
        this.setState({isAbove: false})
        return
      }
      if (!this.state.isAbove && window.scrollY) {
        this.setState({isAbove: true})
        return
      }
    })
  },
  render() {
    return (
      <nav
        className={this.state.isAbove?
          styles.above:
          styles.default}>
        <MenuButton
          onClick={this.props.onMenuButtonClick}/>
        <Logo/>
        <Links
          push={this.props.searchPanelOpened}/>
        <ThemeButton
          onClick={this.props.onThemeButtonClick}
          push={this.props.searchPanelOpened}/>
        <SearchButton
          push={this.props.searchPanelOpened}
          onClick={this.props.onSearchButtonClick}/>
      </nav>
    );
  }
});

export default Navbar;
