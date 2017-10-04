import React from "react";
import FontList from "./fontList";
import About from "./about";

export default props => {
  switch (props.view) {
    case "home":
      return (
        <FontList
          fonts={props.fonts}
          filters={props.filters}
          searchPanelOpened={props.searchPanelOpened}
        />
      );
    case "about":
      return <About />;
  }
};
