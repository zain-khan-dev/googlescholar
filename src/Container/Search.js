import {useEffect, useState} from "react"
import axios from "axios"
import {SearchView} from "../Components"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import Login from "../Components/Login"
import Logout from "../Components/Logout"
import {createRef} from "react"


const LAMBDA_URL = process.env.REACT_APP_LAMBDA_URL
const Search = () => {


    const signupState = useSelector(state => state.signup)

    const [searchedValue, setSearchedValue] = useState("")
    const [timer, setTimer] = useState(null)
    const [offset, setOffset] = useState(0)

    const [books, setBooks] = useState([])
    const [totalBooks, setTotalBooks] = useState(0)

    const MAX_RESULT = 10



    const postSearchMetric = (data) => {
        console.log("Made search here")
        axios({
            method:"post",
            url:LAMBDA_URL,
            data:data
        })
    }
    

    const getAPIData = (searchValue) => {
        searchValue = searchValue.trim()
        if(searchValue == ""){
            setBooks(null)
            return
        }
        console.log("Made api call with " + searchValue)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&startIndex=${offset}`)
        .then((result)=>{
            console.log(result.data.totalItems)
            setTotalBooks(result.data.totalItems)
            result.totalCount
            setBooks(result.data.items)
        })  
        .catch((e)=>{
            console.log(e)
        })
    }

    useEffect(() => {
        getAPIData(searchedValue)

    }, [offset])

    const handlePrev = (e) => {

        setOffset(offset-MAX_RESULT)
    }


    const handleNext = (e) => {
        setOffset(offset+MAX_RESULT)
    }


    const handleSearchChange = (e) => {
        // debounce the query that is pending as user is still typing
        clearTimeout(timer)
        setSearchedValue(e.target.value)
        const searchValue = e.target.value.trim()
        if(searchValue == ""){
            setBooks(null)
            return
        }
        setTimer(setTimeout(()=>{
            
            var data = ""
            if(signupState !== null){
                data = {"name":signupState.name,"email":signupState.email,"googleId":signupState.googleId, "searchQuery":searchValue}
            }
            else{
                data = {"name":"john doe","email":"johndoe@example.com","googleId":"1111", "searchQuery":searchValue}
            }
            postSearchMetric(data)
            getAPIData(searchValue) // execute api get as user has stopped typing
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
            {totalBooks===0?<div></div>:            
            <div style={{display:"flex", width:"80%", margin:"0 auto"}}>
                <div>{offset-MAX_RESULT<0?<div></div>:<button onClick={handlePrev} style={{width:"100px", height:"40px", padding:"10px"}}>Previous</button>}</div>
                <div style={{flex:"1"}}></div>
                <div>{offset+MAX_RESULT<totalBooks?<button onClick={handleNext} style={{width:"100px", height:"40px", padding:"10px"}}>Next</button>:<div></div>}</div>
            </div>}

        </div>
    )
    
}

export default Search