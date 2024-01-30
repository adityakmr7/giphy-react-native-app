import { actionTypes } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TRENDING_FETCH_START:
      return {
        ...state,
        trending: { ...state.trending, loading: true, error: null },
      };
    case actionTypes.TRENDING_FETCH_SUCCESS:
      return {
        ...state,
        trending: { ...state.trending, loading: false, data: action.payload },
      };
    case actionTypes.TRENDING_FETCH_ERROR:
      return {
        ...state,
        trending: { ...state.trending, loading: false, error: action.payload },
      };

    // Search
    case actionTypes.SEARCH_FETCH_START:
      return {
        ...state,
        trending: { ...state.trending, loading: false, error: null },
      };
    case actionTypes.SEARCH_FETCH_SUCCESS:
      return {
        ...state,
        trending: { ...state.trending, loading: false, data: action.payload },
      };
    case actionTypes.SEARCH_FETCH_ERROR:
      return {
        ...state,
        trending: { ...state.trending, loading: false, error: action.payload },
      };
    default:
      return state;
  }
};
