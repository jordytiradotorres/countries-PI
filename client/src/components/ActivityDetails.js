import React from 'react';

const ActivityDetails = ({ activity }) => {
  return (
    <div key={activity.id}>
      <p>
        <span>Name: </span> {activity.name}
      </p>
      <p>
        <span>Difficulty: </span> {activity.difficulty}
      </p>
      <p>
        <span>Duration (hs): </span> {activity.duration}
      </p>
      <p>
        <span>Season: </span> {activity.season}
      </p>
    </div>
  );
};

export default ActivityDetails;
