import Login from "../Components/Login"
import {useState} from "react"
import {Navigate} from "react-router-dom"
const Home = () => {

    console.log(process.env.REACT_APP_GOOGLE_API_KEY)

    const [redirect, setRedirect] = useState(false)

    if(!redirect){
        return (
            <div style={{display:"flex", marginLeft:"50%"}}>
                <WelcomeBoard />
                <Login setRedirect={setRedirect}/>
            </div>
        )
    }
    else{
        return (
            <Navigate to="/search" />
        )
    }
}


export default Home