import React, { createContext, useContext, useState } from 'react';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [data, setData] = useState(null);

  const fetchData = async (location) => {
    try {
      const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ location +'?key=' + apiKey + '&include=days');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ApiContext.Provider value={{ data, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}

