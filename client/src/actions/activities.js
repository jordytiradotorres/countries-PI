import { types } from '../types/types';
import { removeError } from './ui';

const URL_ACTIVITIES = 'https://henry-countries-app.herokuapp.com/api/activity';

export const addActivity = (activity) => {
  return (dispatch) => {
    dispatch(removeError());
    fetch('http://localhost:3001/api/activity', {
      // fetch(`${process.env.REACT_APP_ACTIVITIES_URL}`, {
      // fetch(`${URL_ACTIVITIES}`, {
      method: 'POST',
      body: JSON.stringify(activity),
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        dispatch({
          type: types.activityAddActivity,
          payload: activity.name,
        });
      });
  };
};

export const getActivities = () => {
  return (dispatch) => {
    dispatch(removeError());
    fetch('http://localhost:3001/api/activity')
      // fetch(`${process.env.REACT_APP_ACTIVITIES_URL}`)
      // fetch(`${URL_ACTIVITIES}`)
      .then((response) => response.json())
      .then((result) =>
        dispatch({
          type: types.activityGetActivities,
          payload: result,
        })
      );
  };
};

export const clearActivities = () => {
  return {
    type: types.activityClearActivities,
  };
};
