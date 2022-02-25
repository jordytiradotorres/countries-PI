import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountryId } from '../actions/countries';
import ActivityDetails from './ActivityDetails';
import { Loader } from './Loader';

const CardId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);
  const { countryId } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountryId(id));
  }, [dispatch, id]);

  console.log(countryId);

  const handleBack = () => {
    navigate(-1);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="country">
      <button onClick={handleBack}>Back</button>

      <div className="country__description">
        <figure className="country__image">
          <img src={countryId.flags} alt={countryId.name} />
        </figure>
        <div className="country__body">
          <h3>{countryId.name}</h3>
          <p>
            <span>Codigo: </span> {countryId.id}
          </p>
          <p>
            <span>Capital: </span> {countryId.capital}
          </p>
          <p>
            <span>Subregion: </span> {countryId.subregion}
          </p>
          <p>
            <span>Area: </span> {countryId.area}
          </p>
          <p>
            <span>Population: </span> {countryId.population}
          </p>

          {countryId.activities !== undefined &&
          countryId.activities.length === 0 ? (
            <p>
              <span>Activities: </span> country still without activities
            </p>
          ) : (
            <>
              <p>
                <span>Activities: </span>
              </p>
              {countryId.activities !== undefined &&
                countryId.activities.map((activity) => (
                  <ActivityDetails key={activity.id} activity={activity} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardId;
