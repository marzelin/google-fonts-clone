import {CHANGE_FILTER} from '../actions/actionCreators';

const filters = (state = [], action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return [
        ...state.filter(filter => filter.name !== action.name),
        {name: action.name, value: action.value}
      ];
    default:
      return state;
  }
}

export default filters;
