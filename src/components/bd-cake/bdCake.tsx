import React from 'react';
import './style.scss';

import Head from '../components/patryk/head';
import Cake from '../components/cake/cake';

const BDCake = () => {
  return (
    <div className="bd-cake">
      <Head />
      <Cake />
    </div>
  );
};
// eslint-disable-next-line import/no-default-export
export default BDCake;
