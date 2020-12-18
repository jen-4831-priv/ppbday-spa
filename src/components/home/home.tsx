/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import chicken from './fry-chicken.png';
import './style.scss';

const Home = () => {
  return (
    <div>
      <img src={chicken} alt="chicken" className="chicken" />;
    </div>
  );
};
// eslint-disable-next-line import/no-default-export
export default Home;
