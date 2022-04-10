import GoogleLogin, { useGoogleLogin } from "react-google-login"
import { useDispatch, useSelector } from "react-redux"
import { setGoogleUser } from "../reducer/SignupReducer"



const clientId =  "968493280733-q243rqdumdp3v9tt5jjietb5vi85k202.apps.googleusercontent.com"
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
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{padding:"10px", borderRadius:"10px", backgroundColor:"green", color:"white"}}>
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