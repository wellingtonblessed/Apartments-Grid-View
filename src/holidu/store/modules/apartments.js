// P.S This is a small application so I'll put types and actions together with the reducer

// TYPES
export const POPULATE_APARTMENTS = "POPULATE_APARTMENTS";
export const ADD_APARTMENTS = "ADD_APARTMENTS";
export const GET_APARTMENTS = "GET_APARTMENTS";
export const SET_SELECTED_APARTMENT = "SET_SELECTED_APARTMENT";

// ACTIONS
export const populateApartmentsAction = apartmentData => ({
  type: POPULATE_APARTMENTS,
  apartmentData
});

export const addApartmentsAction = apartmentData => ({
  type: ADD_APARTMENTS,
  apartmentData
});

export const getApartmentsAction = pageIndex => ({
  type: GET_APARTMENTS,
  pageIndex
});

export const setSelectedApartmentAction = apartmentId => ({
  type: SET_SELECTED_APARTMENT,
  apartmentId
});

// REDUCER
const defaultState = {
  offers: []
};

const apartments = (state = defaultState, action) => {
  switch (action.type) {
    case POPULATE_APARTMENTS:
      return {
        ...state,
        ...action.apartmentData
      };
    case ADD_APARTMENTS:
      return {
        ...state,
        metaData: action.apartmentData.metaData,
        offers: [...state.offers, ...action.apartmentData.offers]
      };
    case SET_SELECTED_APARTMENT:
      return {
        ...state,
        selected: action.apartmentId
      };
    default:
      return state;
  }
};

export default apartments;
