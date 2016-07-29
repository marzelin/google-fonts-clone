import {CLOSE_SEARCH_PANEL, OPEN_SEARCH_PANEL} from '../actions/actionCreators';

const searchPanelOpened = (state = false, action) => {
  switch (action.type) {
    case CLOSE_SEARCH_PANEL:
      return false;
    case OPEN_SEARCH_PANEL:
      return true;
    default:
      return state;
  }
};

export default searchPanelOpened;
