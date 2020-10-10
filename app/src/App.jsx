import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import store from './store/store.js';
import './App.css';
import Logo from './components/Logo/Logo';
import CitiesList from './components/CitiesList/CitiesList';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import CitiesTable from './components/CitiesTable/CitiesTable.jsx';
import CityDetail from './components/CityDetail/CityDetail.jsx';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Logo />
        <Search />
        <div className="cities">
          <CitiesList />
        </div>
        <div className="main">
          <Switch>
            <Route path='/' component={CitiesTable} exact />
            <Route path='/:city' component={CityDetail} />
            <Route render={() => <Redirect to='/' />} />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;