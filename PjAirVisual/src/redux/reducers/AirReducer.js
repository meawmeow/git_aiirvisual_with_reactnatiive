import {
  FETCH_COUNTRY_TO_STATE_LOADING,
  FETCH_COUNTRY_TO_STATE_SUCCESS,
  FETCH_COUNTRY_TO_STATE_FAIL,

  FETCH_CITY_TO_STATE_LOADING,
  FETCH_CITY_TO_STATE_SUCCESS,
  FETCH_CITY_TO_STATE_FAIL,

  FETCH_AIR_DETAIL_TO_STATE_LOADING,
  FETCH_AIR_DETAIL_TO_STATE_SUCCESS,
  FETCH_AIR_DETAIL_TO_STATE_FAIL,
} from './../actions/AirActionType';

const initialState = {
  countryState: null,
  city: null,
  airDetail: null,
  isFetchApi: false,
  error: null,
};

export const airReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_TO_STATE_LOADING:
      return {
        ...state,
        countryState: null,
        city: null,
        isFetchApi: true,
      };
    case FETCH_COUNTRY_TO_STATE_SUCCESS:
      return {
        ...state,
        countryState: action.payload,
        isFetchApi: false,
      };
    case FETCH_COUNTRY_TO_STATE_FAIL:
      return {
        ...state,
        error: action.error,
        isFetchApi: false,
      };
    case FETCH_CITY_TO_STATE_LOADING:
      return {
        ...state,
        city: null,
        isFetchApi: true,
      };
    case FETCH_CITY_TO_STATE_SUCCESS:
      return {
        ...state,
        city: action.payload,
        isFetchApi: false,
      };
    case FETCH_CITY_TO_STATE_FAIL:
      return {
        ...state,
        error: action.error,
        isFetchApi: false,
      };
    case FETCH_AIR_DETAIL_TO_STATE_LOADING:
      return {
        ...state,
        airDetail: null,
        isFetchApi: true,
      };
    case FETCH_AIR_DETAIL_TO_STATE_SUCCESS:
      return {
        ...state,
        airDetail: action.payload,
        isFetchApi: false,
      };
    case FETCH_AIR_DETAIL_TO_STATE_FAIL:
      return {
        ...state,
        error: action.error,
        isFetchApi: false,
      };
    default:
      return state;
  }
};
