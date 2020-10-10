import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCity } from '../../store/citiesReducer.js';
import api from '../../api';
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchSpinner,
  SearchAutocomplete,
  SearchResult
} from './style';

const mapDispatch = { addCity };

function Search({ addCity }) {
  const [debounce, setDebounce] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [results, setResults] = useState([]);

  const searchCity = e => {
    clearTimeout(debounce);
    setResults([]);
    
    const keyword = e.target.value;
    if (keyword.length < 3) {
      return;
    }

    setLoading(true);

    setDebounce(
      setTimeout(async () => {
        const { data } = await api.get(`/search/${keyword}`);
        setLoading(false);
        if ( data.data.length ) {
          setResults(data.data);
        }
      }, 1000)
    );
  }

  const saveCity = city => {
    addCity(city);
    setShowAutocomplete(false);
  }

  return (
    <SearchContainer className="search">
      <SearchInput
        type="text"
        placeholder="Search for a city..."
        onChange={searchCity}
        onFocus={() => setTimeout(() => setShowAutocomplete(true), 100)}
      />
      <SearchIcon
        size="20"
        show={!loading}
      />
      <SearchSpinner
        size="20"
        show={loading}
      />
      <SearchAutocomplete
        show={showAutocomplete}
        results={results.length}
      >
        {results.map((result, key) => (
          <SearchResult key={key} onClick={() => saveCity(result) }>
            <strong>
              {result.name.split(',')[0]}
            </strong>
            <small>{result.region}, {result.country}</small>
          </SearchResult>
        ))}
      </SearchAutocomplete>
    </SearchContainer>
  );
}

export default connect(null, mapDispatch)(Search)