import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface User {
  _id: string;
  name: string;
  email: string;
  age: number;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Users List</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user._id} className="border-b pb-2">
            <Link to={`/user/${user._id}`} className="text-blue-600 hover:text-blue-800">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

