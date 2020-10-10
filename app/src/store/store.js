import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../store/citiesReducer.js';

const store = configureStore({
  reducer: {
    cities: citiesReducer
  }
});

export default store;