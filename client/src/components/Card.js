import React from 'react';
import { useSelector } from 'react-redux';
import CardDetails from './CardDetails';

const Card = ({ homeCountries }) => {
  const { msgError } = useSelector((state) => state.ui);

  console.log(msgError);

  return (
    <>
      {msgError === null ? (
        homeCountries?.map((country) => (
          <CardDetails key={country.id} country={country} />
        ))
      ) : (
        // <h2>{msgError}</h2>
        // homeCountries?.map((country) => (
        //   <CardDetails key={country.id} country={country} />
        // ))
        <h2>{msgError}</h2>
      )}
    </>
  );
};

export default Card;
