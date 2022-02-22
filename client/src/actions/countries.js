import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

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
