import { types } from '../types/types';

const initialState = {
  allCountries: [],
  countryId: [],
  resultSearchCountries: [],
  countriesWithActivities: [],
  resultContinent: [],
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.countriesGetCountries:
      return {
        ...state,
        allCountries: action.payload,
        resultContinent: [],
        countriesWithActivities: [],
      };

    case types.countriesGetCountryId:
      return {
        ...state,
        countryId: action.payload,
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
      let result = action.payload.result;
      let order = action.payload.order;

      if (order === 'az name') {
        result = result.sort((a, b) => a.name.localeCompare(b.name));
      } else if (order === 'za name') {
        result = result.sort((a, b) => b.name.localeCompare(a.name));
      } else if (order === 'higher population') {
        result = result.sort((a, b) => b.population - a.population);
      } else if (order === 'lower population') {
        result = result.sort((a, b) => a.population - b.population);
      }

      return {
        ...state,
        resultContinent: result,
        countriesWithActivities: [],
        resultSearchCountries: [],
        allCountries: [],
        countryId: [],
      };

    case types.countriesGetActivities:
      return {
        ...state,
        countriesWithActivities: action.payload,
        resultContinent: [],
        resultSearchCountries: [],
        allCountries: [],
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
