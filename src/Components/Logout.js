import React from 'react';
import { useDispatch } from 'react-redux';
import { setGoogleUser } from '../reducer/SignupReducer';
import {CLIENT_ID} from "../common/Constants"
import { googleLogout } from '@react-oauth/google';

function Logout() {


  const dispatch = useDispatch()

  const onSuccess = () => {
        dispatch(setGoogleUser(null))

        console.log('Logout successfully');
        alert('Logout successfully ✌');
  };

  const handleLogout = () => {
    dispatch(setGoogleUser(null))

    googleLogout()
    console.log('Logout successfully');
    alert('Logout successfully ✌');

  }


  return (
    <div>
      <button style={{backgroundColor:"red", color:"white", fontSize:"18px",borderRadius:"10px", width:"100px", height:"50px"}} onClick={handleLogout} >Logout</button>
    </div>
  );
}

export default Logout;