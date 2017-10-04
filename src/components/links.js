import React from "react";
import { connect } from "react-redux";
import { changeView } from "../actions/actionCreators";
import { bindActionCreators } from "redux";

import styles from "./links.css";

const Links = props => {
  const changeView = view => () => props.changeView(view);
  return (
    <ul className={props.push ? styles.push : styles.default}>
      <li>
        <a
          className={props.view === "home" && styles.active}
          onClick={changeView("home")}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={props.view === "about" && styles.active}
          onClick={changeView("about")}
        >
          About
        </a>
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    view: state.view
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeView
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Links);
