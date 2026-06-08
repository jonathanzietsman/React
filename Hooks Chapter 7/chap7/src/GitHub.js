import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScaleLoader } from 'react-spinners';

function GitHub() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("greg");
  const [isLoading, setIsLoading] = useState(false); // ✅ false initially

  useEffect(() => {
    getData();
  }, []); // ✅ only runs once on mount

  const getData = async() => {
    const res = await
    axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        setUsers(res.data.items);
        setIsLoading(false); // ✅ hide loader when results arrive
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();  // ✅ prevent page refresh
    setIsLoading(true);       // ✅ show loader on submit
    getData();
  };

  const listUsers = users.map((user) =>
    <div key={user.id} style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h3>Github Users Results</h3>
      {isLoading && <ScaleLoader color="#444" />}
      {listUsers}
    </div>
  );
}

export default GitHub;