import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retriveGreeting } from './redux/reducer/message_reducer';
import './App.css';

const App = () => {
  const greeting = useSelector((state) => state.greeting);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveGreeting());
  });

  return (
    <div className="App">
      <h2>{greeting}</h2>

    </div>
  );
};

export default App;
