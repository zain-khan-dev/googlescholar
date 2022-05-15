// import GoogleLogin, { useGoogleLogin } from "react-google-login"
import { useDispatch, useSelector } from "react-redux"
import { GoogleLogin } from '@react-oauth/google';
import { setGoogleUser } from "../reducer/SignupReducer"
import {CLIENT_ID} from "../common/Constants"
import jwtDecode from "jwt-decode";


const Login = () => {
    
    const dispatch = useDispatch()

    const onSuccess = (res) => {
        console.log("here")
        console.log(res)
        const userData = jwtDecode(res.credential)
        console.log(userData)
        dispatch(setGoogleUser(userData))
    }

    const onFailure = (res) => {
        console.log(res)
    }


    return (
        <div>
            <GoogleLogin
                buttonText="Google Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                style={{marginTop:'10px', fontSize: "18px", }}
            />
        </div>
    )
}

export default Login