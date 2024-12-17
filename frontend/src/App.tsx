import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList.tsx';
import UserDetails from './components/UserDetails.tsx';
import AddUser from './components/AddUser.tsx';
import Header from './components/Header.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

