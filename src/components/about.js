import React from "react";
import styles from "./about.css";

export default () => {
  return (
    <div className={styles.default}>
      <h1>Google Fonts Clone</h1>
      <p>
        This project shows how efficient react + redux can be. It renders
        hundreds of font cards that can be filtered with advanced search options
        in realtime with no jank whatsoever. Hit search icon and see it in
        action.
      </p>
      <p>
        In addition you can see responsive behavior in adjusting user interface
        to device capabilities.
      </p>
      <p>
        source code is <a>here</a>
      </p>
    </div>
  );
};
