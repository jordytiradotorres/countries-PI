import React from 'react';
import { Link } from 'react-router-dom';

const CardDetails = ({ country }) => {
  return (
    <Link to={`/countries/${country.id}`}>
      <div className="card">
        <figure className="card__image">
          <img src={country.flags} alt={country.name} />
        </figure>
        <div className="card__body">
          <h3>{country.name}</h3>
          <p>
            <span>Continent: </span> {country.continent}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardDetails;
