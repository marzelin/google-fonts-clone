import {CHOOSE_THEME} from '../actions/actionCreators';

const theme = (state = 'white', action) => {
  switch (action.type) {
    case CHOOSE_THEME:
      return action.color;
    default:
      return state;
  }
};

export default theme;
