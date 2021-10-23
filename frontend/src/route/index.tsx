import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Home} from '../pages'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
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
