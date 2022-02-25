import { types } from '../types/types';
import { finishLoading, removeError, setError, startLoading } from './ui';

export const getCountries = () => {
  return function (dispatch) {
    dispatch(startLoading());
    return fetch('http://localhost:3001/api/countries')
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: types.countriesGetCountries,
          payload: result,
        });
        dispatch(finishLoading());
      });
  };
};

export const getCountryId = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    return fetch(`http://localhost:3001/api/countries/${id}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: types.countriesGetCountryId,
          payload: result,
        });
        dispatch(finishLoading());
      });
  };
};

export const searchCountry = (name) => {
  return (dispatch) => {
    dispatch(startLoading());
    fetch(`http://localhost:3001/api/countries?name=${name}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: types.countriesSearchCountry,
          payload: result,
        });
        dispatch(finishLoading());
        dispatch(removeError());
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(
          setError({
            countryNotFound: 'The country was not found',
          })
        );
        dispatch(finishLoading());
        return error;
      });
  };
};

export const getContinent = (continent = '') => {
  return (dispatch) => {
    dispatch(startLoading());
    fetch(`http://localhost:3001/api/countries?continent=${continent}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: types.countriesGetContinent,
          payload: result,
        });
        dispatch(finishLoading());
      });
  };
};

export const getCountriesActivities = (activity = '') => {
  return (dispatch) => {
    dispatch(startLoading());
    fetch(`http://localhost:3001/api/countries?filter=${activity}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: types.countriesGetActivities,
          payload: result,
        });
        dispatch(finishLoading());
      });
  };
};
