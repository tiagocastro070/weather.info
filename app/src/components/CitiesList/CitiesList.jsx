import React from 'react';
import { useSelector, connect } from 'react-redux';
import { removeCity } from '../../store/citiesReducer.js';
import {
  CitiesContainer,
  CityItem,
  CityItemRemover
 } from './style';

const mapDispatch = { removeCity };

function CitiesList({ removeCity }) {
  const cities = useSelector((state) => {
    return state.cities;
  });

  const removeFromList = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    removeCity(id);
  }

  return (
    <CitiesContainer>
      {cities.length ? null : <small><em>No cities added yet.</em></small>}
      {cities.map((city, index) => (
        <li key={index}>
          <CityItem to={`/${city.url}`} activeClassName="active">
            {city.name.split(',')[0]}
            <CityItemRemover onClick={(e) => removeFromList(city.id, e)}>x</CityItemRemover>
          </CityItem>
        </li>
      ))}
    </CitiesContainer>
  );
}

export default connect(null, mapDispatch)(CitiesList)
