import React from 'react';
import './sass/app.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Feeds from './pages/FeedsPage'
import FeedView from './pages/FeedViewPage'


function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={Feeds}
        />
        <Route
          path="/news/:id"
          component={FeedView}
        />
      </Switch>
    </Router>
  );
}

export default App;
