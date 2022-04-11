import GoogleLogin, { useGoogleLogin } from "react-google-login"
import { useDispatch, useSelector } from "react-redux"
import { setGoogleUser } from "../reducer/SignupReducer"



const clientId =  process.env.REACT_APP_GOOGLE_CLIENT_ID
const Login = ({setRedirect}) => {
    

    const dispatch = useDispatch()



    const onSuccess = (res) => {
        console.log(res.profileObj)
        dispatch(setGoogleUser(res.profileObj))
        setRedirect(true)
    }

    const onFailure = (res) => {
        console.log(res)
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Google Login"
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} 
                    style={{cursor:"pointer",padding:"10px",width:"100px", height:"50px",fontSize:"16px", borderRadius:"10px", backgroundColor:"green", color:"white"}}>
                        Login
                    </button>
                )}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop:'10px'}}
                isSignedIn={false} 
            />
        </div>
    )
}

export default Login