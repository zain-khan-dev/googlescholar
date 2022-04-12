import { configureStore} from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import signupReducer, { setGoogleUser } from './reducer/SignupReducer';



const store = configureStore({
    reducer:{
        signup:signupReducer
    }
})




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

