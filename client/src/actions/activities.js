import { types } from '../types/types';

export const addActivity = (activity) => {
  return (dispatch) => {
    // fetch('http://localhost:3001/api/activity', {
    fetch(`${process.env.REACT_APP_ACTIVITIES_URL}`, {
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
    // fetch('http://localhost:3001/api/activity')
    fetch(`${process.env.REACT_APP_ACTIVITIES_URL}`)
      .then((response) => response.json())
      .then((result) =>
        dispatch({
          type: types.activityGetActivities,
          payload: result,
        })
      );
  };
};
