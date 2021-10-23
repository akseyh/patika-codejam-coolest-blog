import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Home, Profile, AddArticle} from '../pages'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/add-article">
          <AddArticle />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
