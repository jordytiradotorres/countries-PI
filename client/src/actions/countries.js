import { types } from '../types/types';
import { finishLoading, removeError, startLoading } from './ui';

const URL_COUNTRIES = 'https://henry-countries-app.herokuapp.com/api/countries';

export const getCountries = () => {
  return function (dispatch) {
    dispatch(startLoading());
    fetch('http://localhost:3001/api/countries')
      // fetch(`${process.env.REACT_APP_COUNTRIES_URL}`)
      // fetch(`${URL_COUNTRIES}`)
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
    fetch(`http://localhost:3001/api/countries/${id}`)
      // fetch(`${process.env.REACT_APP_COUNTRIES_URL}/${id}`)
      // fetch(`${URL_COUNTRIES}/${id}`)
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
      // fetch(`${process.env.REACT_APP_COUNTRIES_URL}?name=${name}`)

      // fetch(`${URL_COUNTRIES}?name=${name}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: types.countriesSearchCountry,
          payload: result,
        });
        dispatch(removeError());
        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(finishLoading());
        alert('The country was not found');
        return error;
      });
  };
};

export const getContinent = (continent = '', order = '') => {
  return (dispatch) => {
    dispatch(startLoading());
    fetch(`http://localhost:3001/api/countries?continent=${continent}`)
      // fetch(`${process.env.REACT_APP_COUNTRIES_URL}?continent=${continent}`)
      // fetch(`${URL_COUNTRIES}?continent=${continent}`)
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
    fetch(`http://localhost:3001/api/countries?filter=${activity}`)
      // fetch(`${process.env.REACT_APP_COUNTRIES_URL}?filter=${activity}`)
      // fetch(`${URL_COUNTRIES}?filter=${activity}`)
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
    fetch(`http://localhost:3001/api/countries?order=${order}&param=${param}`)
      // fetch(
      //   `${process.env.REACT_APP_COUNTRIES_URL}?order=${order}&param=${param}`
      // )
      // fetch(`${URL_COUNTRIES}?order=${order}&param=${param}`)
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
