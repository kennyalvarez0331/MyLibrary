import { FETCH_ONE } from '../constants/actionTypes';
const book = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ONE:
      return action.payload;

    default:
      return state;
  }
};
export default book;
