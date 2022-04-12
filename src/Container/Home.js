import Login from "../Components/Login"
import {useState} from "react"
import {Navigate} from "react-router-dom"
import WelcomeBoard from "../Components/WelcomeBoard"
import { useSelector } from "react-redux"
const Home = () => {

    const [redirect, setRedirect] = useState(false)

    const loginState = useSelector(state => state.signup)

    console.log(loginState)


    if(loginState === null){
        return (
            <div style={{display:"flex", textAlign:"center", flexDirection:"column", justifyContent:"space-between"}}>
                <div style={{marginTop:"20px"}}>
                    <WelcomeBoard />
                </div>
                <div style={{marginTop:"20px"}}>
                    <Login />  
                </div>
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