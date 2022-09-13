import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer';

const MyStore = configureStore({
  reducer: { greeting: reducer },
  middleware: [logger, thunk],
});

export default MyStore;
