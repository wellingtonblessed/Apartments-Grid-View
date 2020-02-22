// TYPES
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR_STATUS = "SET_ERROR_STATUS";

// ACTIONS
export const setLoadingAction = loadingState => ({
  type: SET_LOADING,
  loadingState
});

export const setErrorAction = errorState => ({
  type: SET_ERROR_STATUS,
  errorState
});

// REDUCER
const defaultState = { loading: false, error: false };

const session = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loadingState
      };
    case SET_ERROR_STATUS:
      return {
        ...state,
        error: action.errorState
      };
    default:
      return state;
  }
};

export default session;
