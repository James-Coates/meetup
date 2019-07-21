import React from 'react';
import EventList from './EventList'
import CitySearch from './CitySearch'
import './App.css';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
