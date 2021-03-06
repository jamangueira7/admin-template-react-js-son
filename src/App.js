import './styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import AppLayout from './containers/AppLayout';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Register from './components/Register';
import NotFound from './components/NotFound';
import ToastCustom from './components/inside/ToastCustom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
          <ToastProvider components={{ Toast: ToastCustom }}>
              <Route exact path="/login" name="Login" render={ props => <Login {...props} /> } />
              <Route exact path="/forgot" name="Forgot" render={ props => <Forgot {...props} /> } />
              <Route exact path="/register" name="Register" render={ props => <Register {...props} /> } />
              <Route exact path="/404" name="NotFound" render={ props => <NotFound {...props} /> } />
              <Route exact path="/" name="Home" render={ props => <AppLayout {...props} /> } />
          </ToastProvider>
      </Switch>
    </BrowserRouter>
  );
}
