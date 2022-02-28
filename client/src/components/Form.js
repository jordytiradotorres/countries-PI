import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getActivities } from '../actions/activities';

const Form = ({
  handleSubmit,
  country,
  handleChange,
  handleChangeContinent,
  handleChangeActivity,
  handleChangeOrder,
}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleSendPageActivity = () => {
    navigate('/activity');
  };

  return (
    <div className="container-forms">
      <form onSubmit={handleSubmit} className="formCountry">
        <div className="formCountry__searchCountry">
          <input
            type="text"
            placeholder="search for a country"
            name="country"
            value={country}
            onChange={handleChange}
          />
        </div>
        <button className="formCountry__buttonCountry">Search</button>
      </form>

      <select id="continent" onChange={handleChangeContinent}>
        <option value="-">Filter by continent</option>
        <option value="africa">África</option>
        <option value="america">Américas</option>
        <option value="antarctic">Antarctic</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceanía</option>
      </select>

      <select id="activities" onChange={handleChangeActivity}>
        <option value="-">Filter by activities</option>
        {activities.length > 0 &&
          activities.map((activity) => (
            <option value={activity}>{activity}</option>
          ))}
      </select>

      <select id="ordered" onChange={handleChangeOrder}>
        <option value="-">Order</option>
        <option value="az name">A - Z</option>
        <option value="za name">Z - A</option>
        <option value="lower population">Population (-)</option>
        <option value="higher population">Population (+)</option>
      </select>

      <button
        className="btn-new-activity"
        type="button"
        onClick={handleSendPageActivity}
      >
        New Activity
      </button>
    </div>
  );
};

export default Form;
