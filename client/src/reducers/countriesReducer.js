import { types } from '../types/types';

const initialState = {
  allCountries: [],
  countryId: [],
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.countriesGetCountries:
      return {
        ...state,
        allCountries: action.payload,
      };

    case types.countriesGetCountryId:
      return {
        ...state,
        countryId: action.payload,
      };

    default:
      return state;
  }
};
