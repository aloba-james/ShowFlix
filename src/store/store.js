import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './query/querySlice';

export default configureStore({
  reducer: {
    query: queryReducer
  }
});