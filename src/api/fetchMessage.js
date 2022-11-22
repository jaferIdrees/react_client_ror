import axios from 'axios';

const backendUrl = 'http://127.0.0.1:8000/messages/1';

const fetchMessage = () => axios.get(backendUrl)
  .then((res) => res.data.message);

export default fetchMessage;
