import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../actions/countries';
import Card from './Card';
import { Loader } from './Loader';

const Countries = () => {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state.countries);
  const { loading } = useSelector((state) => state.ui);
  console.log(allCountries);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // const homeCountries = [];
  // for (let i = 0; i < 9; i++) {
  //   if (allCountries.length) {
  //     homeCountries.push(allCountries[Math.floor(Math.random() * 251)]);
  //   }
  // }

  const homeCountries = () => {
    let result = allCountries.slice(currentPage, currentPage + 9);
    if (currentPage > 9) {
      result = allCountries.slice(currentPage, currentPage + 10);
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
    } else {
      console.log('ya no hay paises');
    }
  };

  console.log(currentPage);

  return loading ? (
    <Loader />
  ) : (
    <div className="countries">
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
