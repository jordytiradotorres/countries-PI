import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContinent,
  getCountries,
  getCountriesActivities,
  getCountriesOrdered,
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
  const [selectOrder, setSelectOrder] = useState({
    order: '',
  });

  const { country } = formValues;
  const { continent } = selectValue;
  const { activity } = selectActivity;
  const { order } = selectOrder;

  useEffect(() => {
    dispatch(getCountries());
    setCurrentPage(0);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getContinent(continent, ''));
    setCurrentPage(0);
  }, [continent, dispatch]);

  useEffect(() => {
    dispatch(getCountriesActivities(activity));
    setCurrentPage(0);
  }, [activity, dispatch]);

  useEffect(() => {
    setCurrentPage(0);
    let op = order;
    switch (op) {
      case 'az name':
        if (resultContinent.length > 0) {
          dispatch(getContinent(continent, order));
        } else {
          dispatch(getCountriesOrdered('ASC', 'name'));
        }
        break;
      case 'za name':
        if (resultContinent.length > 0) {
          dispatch(getContinent(continent, order));
        } else {
          dispatch(getCountriesOrdered('DESC', 'name'));
        }
        break;
      case 'higher population':
        if (resultContinent.length > 0) {
          dispatch(getContinent(continent, order));
        } else {
          dispatch(getCountriesOrdered('DESC', 'population'));
        }
        break;
      case 'lower population':
        if (resultContinent.length > 0) {
          dispatch(getContinent(continent, order));
        } else {
          dispatch(getCountriesOrdered('ASC', 'population'));
        }
        break;

      default:
        break;
    }
    // eslint-disable-next-line
  }, [dispatch, order]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeContinent = (e) => {
    setSelectActivity({
      activity: '',
    });
    setSelectOrder({
      order: '',
    });

    setSelectValue({
      continent: e.target.value,
    });
    if (continent === '') {
      return;
    }
  };

  const handleChangeActivity = (e) => {
    setSelectOrder({
      order: '',
    });
    setSelectValue({
      continent: '',
    });

    setSelectActivity({
      activity: e.target.value,
    });
    if (activity === '') {
      return;
    }
  };

  const handleChangeOrder = (e) => {
    setSelectActivity({
      activity: '',
    });
    setSelectOrder({
      order: e.target.value,
    });
    if (order === '') {
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountry(country));
    setFormValues({
      country: '',
    });
    setSelectValue({
      continent: '',
    });
    setSelectActivity({
      activity: '',
    });
    setSelectOrder({
      order: '',
    });
  };

  const homeCountries = () => {
    let result = [];
    if (resultSearchCountries.length) {
      result = resultSearchCountries.slice(currentPage, currentPage + 9);

      if (currentPage > 0) {
        result = resultSearchCountries.slice(currentPage, currentPage + 10);
      }
    } else if (resultContinent.length) {
      result = resultContinent.slice(currentPage, currentPage + 9);

      if (currentPage > 0) {
        result = resultContinent.slice(currentPage, currentPage + 10);
      }
    } else if (countriesWithActivities.length) {
      result = countriesWithActivities.slice(currentPage, currentPage + 9);

      if (currentPage > 0) {
        result = countriesWithActivities.slice(currentPage, currentPage + 10);
      }
    } else {
      result = allCountries.slice(currentPage, currentPage + 9);

      if (currentPage > 0) {
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
    if (allCountries.length > currentPage + 10) {
      setCurrentPage(currentPage + 10);
    } else if (resultContinent.length > currentPage + 10) {
      setCurrentPage(currentPage + 10);
    } else if (resultSearchCountries.length > currentPage + 10) {
      setCurrentPage(currentPage + 10);
    } else if (countriesWithActivities.length > currentPage + 10) {
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
        handleChangeOrder={handleChangeOrder}
        continent={continent}
        activity={activity}
        order={order}
      />

      <div className="grid-card">
        <Card homeCountries={homeCountries()} />
      </div>

      <div className="countries__buttons">
        {currentPage > 0 && (
          <button className="btn-previous" onClick={handlePrevious}>
            Previous
          </button>
        )}

        {allCountries.length > currentPage + 10 && (
          <button className="btn-next" onClick={handleNext}>
            Next
          </button>
        )}
        {resultContinent.length > 0 &&
          resultContinent.length > currentPage + 10 && (
            <button className="btn-next" onClick={handleNext}>
              Next
            </button>
          )}

        {resultSearchCountries.length > 0 &&
          resultSearchCountries.length > currentPage + 10 && (
            <button className="btn-next" onClick={handleNext}>
              Next
            </button>
          )}

        {countriesWithActivities.length > 0 &&
          countriesWithActivities.length > currentPage + 10 && (
            <button className="btn-next" onClick={handleNext}>
              Next
            </button>
          )}

        {/* <button className="btn-next" onClick={handleNext}>
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Countries;
