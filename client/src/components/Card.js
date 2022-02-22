import React from 'react';
import CardDetails from './CardDetails';

const Card = ({ homeCountries }) => {
  return homeCountries.map((country) => {
    return <CardDetails key={country.id} country={country} />;
  });
};

export default Card;
