import './styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/Login">
            <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
