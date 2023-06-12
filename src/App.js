import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SearchBar from './components/SearchPost.js';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import About from './components/About';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 mx-auto p-6">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:userId" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
