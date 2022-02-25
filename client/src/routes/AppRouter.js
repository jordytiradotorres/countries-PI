import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Activity from '../components/Activity';
import CardId from '../components/CardId';
import Countries from '../components/Countries';
import Home from '../components/Home';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id" element={<CardId />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
