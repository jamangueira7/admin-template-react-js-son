import './styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Forgot from './components/Forgot';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/forgot">
          <Forgot />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
