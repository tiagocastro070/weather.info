import { createSlice } from '@reduxjs/toolkit';

const storedCities = localStorage.getItem('cities');

const citiesSlice = createSlice({
  name: 'cities',
  initialState: storedCities && storedCities !== '[]' ? JSON.parse(storedCities) : [],
  reducers: {
    addCity: (state, action) => {
      // if user selects already selected city
      const existingCity = state.filter(city => city.id === action.payload.id)
      if ( existingCity.length ) return state;

      const newState = [...state, action.payload]
      localStorage.setItem('cities', JSON.stringify(newState));
      return newState;
    },
    removeCity: (state, action) => {
      const newState = state.filter(city => city.id !== action.payload);
      localStorage.setItem('cities', JSON.stringify(newState));
      return newState;
    }
  }
});

export const { addCity, removeCity } = citiesSlice.actions;

export default citiesSlice.reducer;