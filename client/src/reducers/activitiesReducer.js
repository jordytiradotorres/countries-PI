import { types } from '../types/types';

const initialState = {
  activities: [],
};

export const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.activityAddActivity:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };

    case types.activityGetActivities:
      return {
        ...state,
        activities: action.payload,
      };
    case types.activityClearActivities:
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return state;
  }
};
