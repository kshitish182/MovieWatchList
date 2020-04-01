import * as React from 'react';

import MainSearchBar from './MainSearchBar';

const Main = () => (
  <div className="full-height">
    <div className="container">
      <div className="col-left" />
      <div className="col-center">
        <MainSearchBar />
      </div>
      <div className="col-right" />
    </div>
  </div>
);

export default Main;