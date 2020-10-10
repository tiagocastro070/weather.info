import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../api';

import { 
  TableContainer,
  TableHeader,
  TableLine,
  TableCell
} from './style';

function Table() {
  const cities = useSelector((state) => {
    return state.cities;
  });
  const [loading, setLoading] = useState(true);
  const [basicInfos, setBasicInfos] = useState([]);

  function orderItems(column) {
    const newOrder = [...basicInfos].sort((a, b) => {
      if ( typeof a[column] === 'number' ) {
        return a[column] - b[column];
      }
      return a[column].localeCompare(b[column]);
    });

    // Allow to reverse the order when clicked twice on same parameter
    if ( JSON.stringify(newOrder) === JSON.stringify(basicInfos) ) newOrder.reverse()
    
    setBasicInfos(newOrder);
  }

  useEffect(() => {
    setLoading(true);
    const citiesEndpoints = cities.map(({ url }) => api.get(`/main/${url}`));
    Promise.all(citiesEndpoints).then(values => {
      setBasicInfos(
        values.map( ({data}) => ({
          name: data.details.location.name,
          temp: data.details.maxTemp,
          sunrise: data.details.sunrise,
          sunset: data.details.sunset,
          url: data.details.url
        }))
      );
      setLoading(false)
    });
  }, [cities])
  
  if ( loading ) return 'Fetching data...';

  if ( !basicInfos.length ) return 'You must add at least one city.';
  
  return (
    <TableContainer>
      <TableHeader>
        <TableLine>
          <TableCell onClick={() => orderItems('name')}>City</TableCell>
          <TableCell onClick={() => orderItems('temp')}>Temperature</TableCell>
          <TableCell onClick={() => orderItems('sunrise')}>Sunrise</TableCell>
          <TableCell onClick={() => orderItems('sunset')}>Sunset</TableCell>
        </TableLine>
      </TableHeader>
      <tbody>
        {basicInfos.map(({ name, temp, sunrise, sunset, url }, index) => (
          <TableLine key={index}>
            <TableCell><Link to={`/${url}`}><strong>{name}</strong></Link></TableCell>
            <TableCell>{temp}º</TableCell>
            <TableCell>{sunrise}</TableCell>
            <TableCell>{sunset}</TableCell>
          </TableLine>
        ))}
      </tbody>
    </TableContainer>
  );
}

export default connect(null, null)(Table)