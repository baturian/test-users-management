import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">Users</Link>
            </li>
            <li>
              <Link to="/add-user" className="hover:text-blue-200">Add User</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

