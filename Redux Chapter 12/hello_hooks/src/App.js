import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Users from './Users';
import useFetch from './useFetch';

const App = () => {
  // API Endpoint constants
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  
  // State to track which URL is currently being requested (defaults to posts)
  const [requested, setRequested] = useState(postsUrl);
  
  // Custom hook that handles fetching data whenever the 'requested' URL changes
  const data = useFetch(requested);

  /* NOTE: The inline useEffect below was refactored out 
    and moved into the custom `useFetch` hook for cleaner, reusable code.
    
    useEffect(() => {
      fetch(requested)
      .then(response => response.json())
      .then(data => setData(data))
    }, [ requested ])
  */

  return (
    <div>
      {/* Renders the list of users from the Users component */}
      <Users />
      
      {/* Buttons to toggle the 'requested' URL state */}
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      
      <br />
      {/* Displays the current URL string */}
      Requested: { requested }
      
      {/* Dynamically maps over the fetched data array to render list items */}
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;