import React from 'react';
import { useSelector } from 'react-redux';
import CardDetails from './CardDetails';

const Card = ({ homeCountries }) => {
  const { msgError } = useSelector((state) => state.ui);

  return (
    <>
      {msgError ? (
        <h2>{msgError.countryNotFound}</h2>
      ) : (
        homeCountries?.map((country) => (
          <CardDetails key={country.id} country={country} />
        ))
      )}
    </>
  );
};

export default Card;
