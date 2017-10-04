import { CHANGE_VIEW } from "../actions/actionCreators";

export default (state = "home", action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.view;
    default:
      return state;
  }
};
