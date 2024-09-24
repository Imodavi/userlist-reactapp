// src/UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // You can add custom styles here if needed.

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  // Fetch data using Axios inside useEffect hook
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  }, []); // Empty array to run this effect only once on component mount

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
