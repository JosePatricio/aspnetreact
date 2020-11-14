import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import services from "../services/services";
import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  GET_ALL,
  REMOVE_DATA,
  ADD_DATA,
  UPDATE_DATA,
} from "./actionTypes";

const initialState = {
  user: [
    {
      id: null,
      name: "",
      username: "",
    },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAll = (users) => {
    dispatch({
      type: GET_ALL,
      payload: users,
    });
  };

  const remove = async (id) => {
    dispatch({
      type: FETCHING_DATA,
      payload: id,
    });

    try {
      const resp = await services.delete(id);

      if (resp.status) {
        dispatch({
          type: REMOVE_DATA,
          payload: id,
        });

        return resp;
      } else {
        throw resp;
      }
    } catch (error) {
      dispatch({
        type: FETCHING_DATA_FAILURE,
        payload: error,
      });
    }
  };

  const add = async (user) => {
    dispatch({
      type: FETCHING_DATA,
      payload: user,
    });

    try {
      const resp = await services.add(user);

      if (resp.status) {
        dispatch({
          type: ADD_DATA,
          payload: user,
        });

        return resp;
      } else {
        throw resp;
      }
    } catch (error) {
      dispatch({
        type: FETCHING_DATA_FAILURE,
        payload: error,
      });
    }
  };

  const edit = async (user) => {
    dispatch({
      type: FETCHING_DATA,
      payload: user,
    });

    try {
      const resp = await services.update(user);

      if (resp.status) {
        dispatch({
          type: UPDATE_DATA,
          payload: user,
        });

        return resp;
      } else {
        throw resp;
      }
    } catch (error) {
      dispatch({
        type: FETCHING_DATA_FAILURE,
        payload: error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        remove,
        add,
        edit,
        setAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
