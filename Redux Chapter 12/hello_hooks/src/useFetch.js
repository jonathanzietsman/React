// Note: 'use' is imported but not currently utilized in this hook
import { useState, useEffect, use } from 'react';

const useFetch = (url) => {
  // Local state to hold the API response data
  const [data, setData] = useState([]);

  // Runs side-effects (fetching data) whenever the 'url' argument changes
  useEffect(() => {
    fetch(url)
      .then(response => response.json()) // Converts the raw response to JSON
      .then(data => setData(data));       // Updates state with the parsed data
  }, [url]); // Dependency array: triggers the effect only when 'url' changes

  // Returns the stateful data so components using the hook can access it
  return data;
};

export default useFetch;