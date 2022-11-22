import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const backend_url = 'http://127.0.0.1:8000/messages/1'

  useEffect(() => {
    axios.get(backend_url)
        .then(res => setMessage(res.data.message))
        .catch(error => console.log(error))
  }, []);

  const [message, setMessage] = useState([]);

  return (
    <div className="App">
      <h2> {message}</h2>

    </div>
  );
}

export default App;