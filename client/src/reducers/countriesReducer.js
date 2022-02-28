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
        //
        resultContinent: [],
      };

    case types.countriesGetCountryId:
      return {
        ...state,
        countryId: action.payload,
        //
      };

    case types.countriesSearchCountry:
      return {
        ...state,
        resultContinent: [],
        allCountries: [],
        resultSearchCountries: action.payload,
        countryId: [],
        countriesWithActivities: [],
      };

    case types.countriesGetContinent:
      return {
        ...state,
        resultContinent: action.payload,
        resultSearchCountries: [],
        countriesWithActivities: [],
        //
        allCountries: [],
        countryId: [],
      };

    case types.countriesGetActivities:
      return {
        ...state,
        countriesWithActivities: action.payload,
        resultContinent: [],
        resultSearchCountries: [],
      };

    case types.countriesGetCountriesOrdered:
      return {
        ...state,
        allCountries: action.payload,
        countriesWithActivities: [],
      };
    default:
      return state;
  }
};
