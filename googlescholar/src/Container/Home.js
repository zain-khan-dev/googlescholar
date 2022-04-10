import Login from "../Components/Login"
import {useState} from "react"
import {Navigate} from "react-router-dom"
import WelcomeBoard from "../Components/WelcomeBoard"
const Home = () => {

    console.log(process.env.REACT_APP_GOOGLE_API_KEY)

    const [redirect, setRedirect] = useState(false)

    if(!redirect){
        return (
            <div style={{display:"flex", textAlign:"center", flexDirection:"column", justifyContent:"space-between"}}>
                <div style={{marginTop:"20px"}}>
                    <WelcomeBoard />
                </div>
                <div style={{marginTop:"20px"}}>
                    <Login setRedirect={setRedirect}/>
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