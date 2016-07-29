import {OPEN_THEME_CHOOSER, CLOSE_THEME_CHOOSER} from '../actions/actionCreators';

const themeChooserOpened = (state = false, action) => {
  switch (action.type) {
    case OPEN_THEME_CHOOSER:
      return true;
    case CLOSE_THEME_CHOOSER:
      return false;
    default:
      return state;
  }
};

export default themeChooserOpened;
