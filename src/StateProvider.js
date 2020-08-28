import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer
export const StateContext = createContext();

//children is refering to <App /> in index.js
//initial state is what the data looks like when the app is loaded
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
