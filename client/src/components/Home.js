import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate('/countries', { replace: true });
  };

  return (
    <div className="home">
      <h1 className="home__title">Countries App</h1>

      <button className="home__button" onClick={handleClick}>
        Go
      </button>
    </div>
  );
};

export default Home;
