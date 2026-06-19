import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScaleLoader } from 'react-spinners'; // Third-party loading animation spinner

/**
 * GitHub Component: Fetches and displays a list of GitHub users 
 * based on a search term using the public GitHub Search API.
 */
function GitHub() {
  // --- State Definitions ---
  // Stores the array of user objects returned by the GitHub API
  const [users, setUsers] = useState([]);
  
  // Tracks the text typed into the search bar (Defaults to "greg")
  const [searchTerm, setSearchTerm] = useState("greg");
  
  // Flag to manage the visibility of the loading spinner during API requests
  const [isLoading, setIsLoading] = useState(false); 

  /**
   * Side Effect Hook: Triggers an initial data fetch when the component 
   * mounts for the first time. The empty dependency array [] ensures it runs only once.
   */
  useEffect(() => {
    getData();
  }, []); 

  /**
   * Helper function to execute the HTTP GET request to GitHub's search endpoint.
   */
  const getData = async() => {
    // Making an asynchronous call using Axios with template literals for the query
    const res = await
    axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        // Update users state with the payload items array
        setUsers(res.data.items);
        // Turn off the loading spinner since data is fetched successfully
        setIsLoading(false); 
      });
  };

  /**
   * Handles the search form submission.
   */
  const handleSubmit = (event) => {
    event.preventDefault();  // Stops the default HTML form behavior from refreshing the entire page
    setIsLoading(true);       // Turn on the loading spinner while fetching new data
    getData();                // Execute fetch operation
  };

  /**
   * Transformation Loop: Maps the array of user data into a collection of JSX elements.
   * Assigns a unique key to each element using the user's GitHub ID for React's reconciliation engine.
   */
  const listUsers = users.map((user) =>
    <div key={user.id} style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
      {/* Hyperlink wrapping the avatar image that navigates to the user's profile */}
      <a href={user.html_url}>
        <img
          width={64}
          height={64}
          style={{ marginRight: "1rem" }}
          src={user.avatar_url}
          alt={user.login}
        />
      </a>
      <div>
        <h5>Login: {user.login}</h5>
        <p>Id: {user.id}</p>
      </div>
    </div>
  );

  return (
    <div>
      {/* Search Input Form Section */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          // Two-way data binding: Updates state whenever the user types
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h3>Github Users Results</h3>
      
      {/* Short-circuit evaluation: Shows spinner if isLoading is true */}
      {isLoading && <ScaleLoader color="#444" />}
      
      {/* Renders the pre-constructed array of user profile elements */}
      {listUsers}
    </div>
  );
}

export default GitHub;