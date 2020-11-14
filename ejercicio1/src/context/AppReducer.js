import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  GET_ALL
} from "./actionTypes.js";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        data: action.payload,
      };

    case FETCHING_DATA:
      return {
        ...state,
        fetching: true,
      };

  

    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
