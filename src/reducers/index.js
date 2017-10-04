import { combineReducers } from "redux";

import menuPanelOpened from "./menuPanelOpened";
import searchPanelOpened from "./searchPanelOpened";
import themeChooserOpened from "./themeChooserOpened";
import theme from "./theme";
import fonts from "./fonts";
import filters from "./filters";
import view from "./view";

export default combineReducers({
  menuPanelOpened,
  searchPanelOpened,
  themeChooserOpened,
  theme,
  fonts,
  filters,
  view
});
