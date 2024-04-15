import React, {useState } from 'react';
import { ApiProvider, useApi } from './ApiContext';

function App() {
  const { data, fetchData } = useApi();
  const [location, setLocation] = useState('');
  const days = data ? data.days : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(location);
  }

  return (
    <div>
      <h1>Enter a location</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Fetch Data</button>
        </form>
      {data ? (
        <div>
          <h2>Location: {data.resolvedAddress}</h2>
          <h2>Current Weather</h2>
          <h3>High: {days[0].tempmax}</h3>
          <h3>Low: {days[0].tempmin}</h3>
          <h3>Current: {days[0].temp}</h3>
          <h3>Conditions: {days[0].conditions}</h3>
          <br/>
          <h2>Forecast</h2>
          <h3>{days[1].datetime}</h3>
          <h3>High: {days[1].tempmax}</h3>
          <h3>Low: {days[1].tempmin}</h3>
          <h3>Conditions: {days[1].conditions}</h3>
          <br/>
          <h3>{days[2].datetime}</h3>
          <h3>High: {days[2].tempmax}</h3>
          <h3>Low: {days[2].tempmin}</h3>
          <h3>Conditions: {days[2].conditions}</h3>
          <br/>
          <h3>{days[3].datetime}</h3>
          <h3>High: {days[3].tempmax}</h3>
          <h3>Low: {days[3].tempmin}</h3>
          <h3>Conditions: {days[3].conditions}</h3>
          <br/>
          <h3>{days[4].datetime}</h3>
          <h3>High: {days[4].tempmax}</h3>
          <h3>Low: {days[4].tempmin}</h3>
          <h3>Conditions: {days[4].conditions}</h3>
          <br/>
          <h3>{days[5].datetime}</h3>
          <h3>High: {days[5].tempmax}</h3>
          <h3>Low: {days[5].tempmin}</h3>
          <h3>Conditions: {days[5].conditions}</h3>
          <br/>
          <h3>{days[6].datetime}</h3>
          <h3>High: {days[6].tempmax}</h3>
          <h3>Low: {days[6].tempmin}</h3>
          <h3>Conditions: {days[6].conditions}</h3>
          <br/>
          <h3>{days[7].datetime}</h3>
          <h3>High: {days[7].tempmax}</h3>
          <h3>Low: {days[7].tempmin}</h3>
          <h3>Conditions: {days[7].conditions}</h3>
          <br/>
          
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <ApiProvider>
      <App />
    </ApiProvider>
  );
}
