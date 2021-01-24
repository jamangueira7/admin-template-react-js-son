import './styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppLayout from './containers/AppLayout';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Register from './components/Register';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" name="Login" render={ props => <Login {...props} /> } />
          <Route exact path="/forgot" name="Forgot" render={ props => <Forgot {...props} /> } />
          <Route exact path="/register" name="Register" render={ props => <Register {...props} /> } />
          <Route path="/" name="Home" render={ props => <AppLayout {...props} /> } />
          <Route  path="*" name="NotFound" render={ props => <NotFound {...props} /> } />
      </Switch>
    </BrowserRouter>
  );
}
