import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { retriveGreeting } from './redux/reducer/message_reducer';
import Greeting from './Greeting';
import './App.css';

const App = () => {
  const greeting = useSelector((state) => state.greeting);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveGreeting());
  });

  return (
    <Routes>
      <Route path="/" element={<Greeting text={greeting} />} />
    </Routes>
  );
};

export default App;
