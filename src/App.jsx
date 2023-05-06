import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';

// import component
import BookablesPage from './Components/Bookables/BookablesPage';
import BookingsPage from './Components/Bookings/BookingsPage';
import UsersPage from './Components/Users/UsersPage';
import UserPicker from './Components/Users/UserPicker';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/bookings" className="btn btn-header">
                <FaCalendarAlt />
                <span>Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/bookables" className="btn btn-header">
                <FaDoorOpen />
                <span>Bookables</span>
              </Link>
            </li>
            <li>
              <Link to="/users" className="btn btn-header">
                <FaUsers />
                <span>Users</span>
              </Link>
            </li>
          </ul>
        </nav>

        <UserPicker />
      </header>

      <Routes>
        <Route exact path="/" element={<BookingsPage />} />
        <Route exact path="/bookings" element={<BookingsPage />} />
        <Route exact path="/bookables" element={<BookablesPage />} />
        <Route exact path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
}
