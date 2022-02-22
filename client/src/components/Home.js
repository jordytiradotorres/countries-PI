import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate('/countries', { replace: true });
  };

  return (
    <div className="home">
      <button className="home__button" onClick={handleClick}>
        Go
      </button>
    </div>
  );
};

export default Home;
