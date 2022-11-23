import React from 'react';

const Greeting = (props) => (
  <div className="App">
    <h2>
      { { ...props }.text }
      {' '}
    </h2>

  </div>
);

export default Greeting;
