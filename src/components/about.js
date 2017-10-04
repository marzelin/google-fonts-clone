import React from "react";
import styles from "./about.css";

export default () => {
  return (
    <div className={styles.default}>
      <h1>Google Fonts Clone</h1>
      <p>
        This project shows how efficient react + redux can be and how easy it is
        to create complex user interfaces in these technologies. It renders
        hundreds of font cards that can be filtered with advanced search options
        in realtime. Go back to home page, hit search icon and see it in action.
      </p>
      <p>
        In addition you can see responsive behavior in adjusting user interface
        to device capabilities.
      </p>
      <p>
        project source code is{" "}
        <a href="https://github.com/marzelin/google-fonts-clone">here</a>
      </p>
    </div>
  );
};
