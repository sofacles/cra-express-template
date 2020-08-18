import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BrowsePaint from './components/PaintChips';
import PostPaint from './components/PostPaint';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BrowsePaint} />
          <Route exact path="/postPaint" component={PostPaint} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
