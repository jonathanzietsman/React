import React from 'react';
import useFetch from './useFetch';

const Users = () => {
    // Reuses the custom useFetch hook with a hardcoded users endpoint
    const users = useFetch("https://jsonplaceholder.typicode.com/users");

    return (
        <ul>
            {users.map(el => (
                <li key={el.id}>{el.name}</li>
            ))}
        </ul>
    );
};

export default Users;

