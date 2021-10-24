import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Profile, AddArticle, Post, Login, NotFound } from '../pages'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/add-article">
          <AddArticle />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
