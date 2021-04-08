import React from 'react';
import './sass/app.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
const Feeds = React.lazy(() =>
  import("./pages/FeedsPage"),
);

const FeedView = React.lazy(() =>
  import("./pages/FeedViewPage"),
);
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
