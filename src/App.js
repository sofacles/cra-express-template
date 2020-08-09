import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import BrowsePaint from './components/PaintChips';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={BrowsePaint} />
      </div>
    </Router>
  );
}

export default App;
