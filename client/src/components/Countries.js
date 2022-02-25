import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContinent,
  getCountries,
  getCountriesActivities,
  searchCountry,
} from '../actions/countries';

import Card from './Card';
import Form from './Form';
import { Loader } from './Loader';

const Countries = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);
  const {
    allCountries,
    resultSearchCountries,
    resultContinent,
    countriesWithActivities,
  } = useSelector((state) => state.countries);

  console.log('cwa', countriesWithActivities);
  // const { activities } = useSelector((state) => state.activities);

  // console.log(allCountries);
  // console.log('search', resultSearchCountries);
  // console.log('continent', resultContinent);

  const [currentPage, setCurrentPage] = useState(0);
  const [formValues, setFormValues] = useState({
    country: '',
  });
  const [selectValue, setSelectValue] = useState({
    continent: '',
  });
  const [selectActivity, setSelectActivity] = useState({
    activity: '',
  });

  const { country } = formValues;
  const { continent } = selectValue;
  const { activity } = selectActivity;

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getContinent(continent));
  }, [continent, dispatch]);

  useEffect(() => {
    dispatch(getCountriesActivities(activity));
  }, [activity, dispatch]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeContinent = (e) => {
    setSelectValue({
      continent: e.target.value,
    });
  };

  const handleChangeActivity = (e) => {
    setSelectActivity({
      activity: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountry(country));
  };

  const homeCountries = () => {
    let result = [];
    if (resultSearchCountries.length) {
      result = resultSearchCountries.slice(currentPage, currentPage + 9);

      if (currentPage > 9) {
        result = resultSearchCountries.slice(currentPage, currentPage + 10);
      }
    } else if (resultContinent.length) {
      result = resultContinent.slice(currentPage, currentPage + 9);

      if (currentPage > 9) {
        result = resultContinent.slice(currentPage, currentPage + 10);
      }
    } else if (countriesWithActivities.length) {
      result = countriesWithActivities.slice(currentPage, currentPage + 9);

      if (currentPage > 9) {
        result = countriesWithActivities.slice(currentPage, currentPage + 10);
      }
    } else {
      result = allCountries.slice(currentPage, currentPage + 9);

      if (currentPage > 9) {
        result = allCountries.slice(currentPage, currentPage + 10);
      }
    }

    return result;
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 10);
    }
  };

  const handleNext = () => {
    if (currentPage < 240) {
      setCurrentPage(currentPage + 10);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="countries">
      <Form
        handleSubmit={handleSubmit}
        country={country}
        handleChange={handleChange}
        handleChangeContinent={handleChangeContinent}
        handleChangeActivity={handleChangeActivity}
      />

      <div className="grid-card">
        <Card homeCountries={homeCountries()} />
      </div>

      <div className="countries__buttons">
        <button className="btn-previous" onClick={handlePrevious}>
          Previous
        </button>
        <button className="btn-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Countries;
