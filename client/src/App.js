import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/index.js'

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
};

export default App;
