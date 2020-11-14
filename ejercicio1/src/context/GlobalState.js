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
  data: [],
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


  return (
    <GlobalContext.Provider
      value={{
      
        setAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
