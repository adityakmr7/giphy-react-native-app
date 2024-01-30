import { createContext, useContext, useReducer } from "react";
import { get_search_gif, get_trending_gif } from "../api/endpoints";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { actionTypes } from "./actionTypes";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchTrendingGifs = async () => {
    dispatch({ type: actionTypes.TRENDING_FETCH_START });
    try {
      const response = await get_trending_gif(25);
      dispatch({
        type: actionTypes.TRENDING_FETCH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch({
        type: actionTypes.TRENDING_FETCH_ERROR,
        payload: error.message,
      });
    }
  };

  const handleSearchGifs = async (searchTerm) => {
    dispatch({ type: actionTypes.SEARCH_FETCH_START });
    try {
      const response = await get_search_gif(searchTerm, 25);
      dispatch({
        type: actionTypes.SEARCH_FETCH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.SEARCH_FETCH_ERROR,
        payload: error.message,
      });
    }
  };
  return (
    <AppContext.Provider
      value={{ state, dispatch, fetchTrendingGifs, handleSearchGifs }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within an AppContextProvider");
  return context;
};

export { AppContextProvider, useAppContext };
