import { types } from '../types/types';

const initialState = {
  allCountries: [],
  countryId: [],
  resultSearchCountries: [],
  resultContinent: [],
  countriesWithActivities: [],
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

    case types.countriesSearchCountry:
      return {
        ...state,
        resultSearchCountries: action.payload,
      };

    case types.countriesGetContinent:
      return {
        ...state,
        countryId: [],
        resultSearchCountries: [],
        allCountries: [],
        resultContinent: action.payload,
      };

    case types.countriesGetActivities:
      return {
        ...state,
        countriesWithActivities: action.payload,
        resultContinent: [],
        resultSearchCountries: [],
      };

    default:
      return state;
  }
};
