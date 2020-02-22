// TYPES
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR_STATUS = "SET_ERROR_STATUS";
export const OPEN_PREVIEW = "OPEN_PREVIEW";
export const CLOSE_PREVIEW = "CLOSE_PREVIEW";

// ACTIONS
export const setLoadingAction = loadingState => ({
  type: SET_LOADING,
  loadingState
});

export const setErrorAction = errorState => ({
  type: SET_ERROR_STATUS,
  errorState
});

export const openPreviewAction = () => ({
  type: OPEN_PREVIEW
});

export const closePreviewAction = () => ({
  type: CLOSE_PREVIEW
});

// REDUCER
const defaultState = { loading: false, error: false, preview: false };

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
    case OPEN_PREVIEW:
      return {
        ...state,
        preview: true
      };
    case CLOSE_PREVIEW:
      return {
        ...state,
        preview: false
      };
    default:
      return state;
  }
};

export default session;
