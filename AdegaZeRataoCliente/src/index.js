import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Criacao from './pages/Criacao';
import Avaliar from './pages/Avaliar';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import Alterar from './pages/Alterar';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = '/' component={App} />
      <Route path = '/Criacao' component={Criacao} />
      <Route path = '/Avaliar' component={Avaliar} />
      <Route path = '/Alterar' component={Alterar} />
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
