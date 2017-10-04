import React from "react";
import { connect } from "react-redux";

import styles from "./fontList.css";
import FontCard from "./fontCard";

const FontList = React.createClass({
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.fonts !== nextProps.fonts ||
      this.props.filters !== nextProps.filters ||
      this.props.searchPanelOpened !== nextProps.searchPanelOpened
    );
  },
  filterFonts() {
    const filters = this.props.filters.filter(filter => {
      switch (filter.name) {
        case "categories":
          if (filter.value.length === 5) return false;
          return true;
        case "name":
          if (filter.value === "") return false;
          return true;
        default:
          if (filter.value === "0") return false;
          return true;
      }
    });
    if (filters.length === 0) return this.props.fonts;

    return this.props.fonts.filter(font => {
      for (let key in font.fonts) {
        if (
          filters.every(filter => {
            switch (filter.name) {
              case "categories":
                return filter.value.includes(font.category);
              case "num of styles":
                return Object.keys(font.fonts).length >= parseInt(filter.value);
              case "name":
                return RegExp(filter.value, "i").test(font.family);
              default:
                if (font.fonts[key])
                  return filter.value == font.fonts[key][filter.name];
            }
          })
        )
          return true;
      }
    });
  },
  getFontComponents() {
    return this.filterFonts().map((font, i) => {
      return (
        <FontCard
          key={font.family}
          name={font.family}
          author={font.designers}
          numOfFonts={Object.keys(font.fonts).length}
        />
      );
    });
  },
  render() {
    return (
      <div
        className={this.props.searchPanelOpened ? styles.push : styles.default}
      >
        {this.getFontComponents()}
      </div>
    );
  }
});

const mapStateToProps = state => {
  return {
    fonts: state.fonts,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(FontList);
