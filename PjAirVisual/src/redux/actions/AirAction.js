import axios from 'axios';

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
} from './AirActionType';
import {API_KEY,BASE_URL} from '../../util'


  //COUNTRY
export const setStageCountryToLoading = () => ({
    type: FETCH_COUNTRY_TO_STATE_LOADING,
    isFetch: true,
    payload: null,
  });
  export const setStageCountryToSuccess = (data) => ({
    type: FETCH_COUNTRY_TO_STATE_SUCCESS,
    isFetch: false,
    payload: data,
  });

  export const setStageCountryToFail = (data) => ({
    type: FETCH_COUNTRY_TO_STATE_FAIL,
    isFetch: false,
    error: data,
  });

  //CITY
  export const setStageCityToLoading = () => ({
    type: FETCH_CITY_TO_STATE_LOADING,
    isFetch: true,
    payload: null,
  });
  export const setStageCityToSuccess = (data) => ({
    type: FETCH_CITY_TO_STATE_SUCCESS,
    isFetch: false,
    payload: data,
  });
  export const setStageCityToFail = (data) => ({
    type: FETCH_CITY_TO_STATE_FAIL,
    isFetch: false,
    error: data,
  });

  //AIR DETAIL
  export const setStageAirDetailToLoading = () => ({
    type: FETCH_AIR_DETAIL_TO_STATE_LOADING,
    isFetch: true,
    payload: null,
  });
  export const setStageAirDetailToSuccess = (data) => ({
    type: FETCH_AIR_DETAIL_TO_STATE_SUCCESS,
    isFetch: false,
    payload: data,
  });
  export const setStageAirDetailToFail = (data) => ({
    type: FETCH_AIR_DETAIL_TO_STATE_FAIL,
    isFetch: false,
    error: data,
  });

  export const onFetchCountryApi = ({country}) => {
    return async (dispatch) => {
      try {
        dispatch(setStageCountryToLoading());
        await axios
          .get(BASE_URL+'states?country='+country+'&key='+API_KEY)
          .then(function (response) {
            dispatch(setStageCountryToSuccess(response.data));
          })
          .catch(function (error) {
            dispatch(setStageCountryToFail(error));
          });
      } catch (error) {
        dispatch(setStageCountryToFail(error));
      }
    };
  };

  export const onFetchCityApi = ({country,state}) => {
    return async (dispatch) => {
      try {
        dispatch(setStageCityToLoading());
        await axios
          .get(BASE_URL+'cities?state='+state+'&country='+country+'&key='+API_KEY)
          .then(function (response) {
            dispatch(setStageCityToSuccess(response.data));
          })
          .catch(function (error) {
            dispatch(setStageCityToFail(error));
          });
      } catch (error) {
        dispatch(setStageCityToFail(error));
      }
    };
  };


  export const onFetchAirDetailApi = ({country,state,city}) => {
    return async (dispatch) => {
      try {
        dispatch(setStageAirDetailToLoading());
        await axios
          .get(BASE_URL+'city?city='+city+'&state='+state+'&country='+country+'&key='+API_KEY)
          .then(function (response) {
            dispatch(setStageAirDetailToSuccess(response.data));
          })
          .catch(function (error) {
            dispatch(setStageAirDetailToFail(error));
          });
      } catch (error) {
        dispatch(setStageAirDetailToFail(error));
      }
    };
  };