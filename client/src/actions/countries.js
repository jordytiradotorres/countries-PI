import { types } from '../types/types';
import { finishLoading, removeError, setError, startLoading } from './ui';

export const getCountries = () => {
  return function (dispatch) {
    dispatch(startLoading());
    // fetch('http://localhost:3001/api/countries')
    fetch(`${process.env.REACT_APP_COUNTRIES_URL}`)
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
    // fetch(`http://localhost:3001/api/countries/${id}`)
    fetch(`${process.env.REACT_APP_COUNTRIES_URL}/${id}`)
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
    // fetch(`http://localhost:3001/api/countries?name=${name}`)
    fetch(`${process.env.REACT_APP_COUNTRIES_URL}?name=${name}`)
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

export const getContinent = (continent = '', order = '') => {
  return (dispatch) => {
    dispatch(startLoading());
    // fetch(`http://localhost:3001/api/countries?continent=${continent}`)
    fetch(`${process.env.REACT_APP_COUNTRIES_URL}?continent=${continent}`)
      .then((response) => response.json())
      .then((result) => {
        if (order === 'az name') {
          result = result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (order === 'za name') {
          result = result.sort((a, b) => b.name.localeCompare(a.name));
        } else if (order === 'higher population') {
          result = result.sort((a, b) => b.population - a.population);
        } else if (order === 'lower population') {
          result = result.sort((a, b) => a.population - b.population);
        }
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
    // fetch(`http://localhost:3001/api/countries?filter=${activity}`)
    fetch(`${process.env.REACT_APP_COUNTRIES_URL}?filter=${activity}`)
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

export const getCountriesOrdered = (order, param) => {
  return (dispatch) => {
    dispatch(startLoading());
    // fetch(`http://localhost:3001/api/countries?order=${order}&param=${param}`)
    fetch(
      `${process.env.REACT_APP_COUNTRIES_URL}?order=${order}&param=${param}`
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: types.countriesGetCountriesOrdered,
          payload: result,
        });
        dispatch(finishLoading());
      });
  };
};
