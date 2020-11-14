import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  GET_ALL,
  REMOVE_DATA,
  ADD_DATA,
  UPDATE_DATA,
} from "./actionTypes.js";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        users: action.payload,
      };

    case FETCHING_DATA:
      return {
        ...state,
        fetching: true,
      };

    case ADD_DATA:
      return {
        ...state,
        fetching: false,
        users: [...state.users, action.payload],
      };

    case UPDATE_DATA:
      const updatedUser = action.payload;

      const updatedUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });

      return {
        ...state,
        fetching: false,
        users: updatedUsers,
      };

    case REMOVE_DATA:
      return {
        ...state,
        fetching: false,
        users: state.users.filter((user) => user.id !== action.payload),
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
