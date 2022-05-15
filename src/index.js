import { configureStore} from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import signupReducer, { setGoogleUser } from './reducer/SignupReducer';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CLIENT_ID } from './common/Constants';

const store = configureStore({
    reducer:{
        signup:signupReducer
    }
})




ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById('root')
);

