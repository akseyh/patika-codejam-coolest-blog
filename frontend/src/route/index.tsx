import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Profile, AddArticle } from '../pages'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/add-article">
          <AddArticle />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
