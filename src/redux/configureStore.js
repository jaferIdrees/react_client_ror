import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/message_reducer';

const greetingStore = configureStore({
  reducer,
});

export default greetingStore;
