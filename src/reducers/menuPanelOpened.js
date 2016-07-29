import {CLOSE_MENU_PANEL, OPEN_MENU_PANEL} from '../actions/actionCreators';

const menuPanelOpened = (state = false, action) => {
  switch (action.type) {
    case CLOSE_MENU_PANEL:
      return false;
    case OPEN_MENU_PANEL:
      return true;
    default:
      return state;
  }
};

export default menuPanelOpened;
