import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { setGoogleUser } from '../reducer/SignupReducer';


const clientId =  "968493280733-q243rqdumdp3v9tt5jjietb5vi85k202.apps.googleusercontent.com"
function Logout() {

    const dispatch = useDispatch()

  const onSuccess = () => {
        dispatch(setGoogleUser(null))
        console.log('Logout successfully');
        alert('Logout successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} 
            style={{cursor:"pointer", padding:"10px", width:"100px", height:"50px",fontSize:"16px",borderRadius:"10px", backgroundColor:"red", color:"white"}}>
                Logout
            </button>
        )}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;