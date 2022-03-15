import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
//
//
//zgeRUqq5uQbX7ieNpNDm3ysu_Q7I6V6aYb0mJ0H14aq5QleR6rU9YTO_wDeWHF7t

ReactDOM.render(
  <Auth0Provider
    domain='dev-qnvfvb4p.us.auth0.com'
    clientId='m4JGuZ8hu5vGrrhFKLUxYR5AbnYHKdf2'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
