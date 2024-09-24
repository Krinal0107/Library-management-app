import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">E-Library</Link>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
