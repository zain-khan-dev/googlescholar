import {useEffect, useState} from "react"
import axios from "axios"
import {SearchView} from "../Components"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import Login from "../Components/Login"
import Logout from "../Components/Logout"
const Search = () => {

    const signupState = useSelector(state => state.signup)

    const [searchedValue, setSearchedValue] = useState("")
    const [timer, setTimer] = useState(null)

    const [books, setBooks] = useState(null)


    const getAPIData = (searchValue) => {
        searchValue = searchValue.trim()
        if(searchValue == ""){
            setBooks(null)
            return
        }
        console.log("Made api call with " + searchValue)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
        .then((result)=>{
            console.log(result)
            setBooks(result.data)
        })  
        .catch((e)=>{
            console.log(e)
        })
    }




    const handleSearchChange = (e) => {
        // debounce the query that is pending as user is still typing
        clearTimeout(timer)
        setSearchedValue(e.target.value)
        console.log("made query with " + e.target.value)
        setTimer(setTimeout(()=>{
            getAPIData(e.target.value) // execute api get as user has stopped typing
        }, 1000))  
    }

    return (
        <div>
            <div style={{display:"flex", flexDirection:"row-reverse", width:"75%"}}>
            {signupState==null?<Login />:<Logout />}
            </div>
            <div style={{ textAlign:"center"}}>
                <input style={{borderRadius:"10px", margin:"20px",width:"600px", height:"30px", padding:"10px", fontSize:"20px"}} placeholder="Start Typing Here" type="text" value={searchedValue} onChange={handleSearchChange}/>
                <SearchView  books={books}/>
            </div>
        </div>
    )
    
}

export default Search