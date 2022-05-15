import {useEffect, useState} from "react"
import axios from "axios"
import {SearchView} from "../Components"
import { useSelector } from "react-redux"
import Login from "../Components/Login"
import Logout from "../Components/Logout"
import {postSearchMetric, getAPIData} from "../common/utils"
import {MAX_RESULT} from "../common/Constants"



const Search = () => {


    const signupState = useSelector(state => state.signup)

    const [searchedValue, setSearchedValue] = useState("")
    const [timer, setTimer] = useState(null)
    const [offset, setOffset] = useState(0)

    const [books, setBooks] = useState([])
    const [totalBooks, setTotalBooks] = useState(0)

    useEffect(async () => {
        const bookResultData = await getAPIData(searchedValue, offset)
        updateBooks(bookResultData)
    }, [offset])

    const handlePrev = (e) => {

        // decrease the offset by the max_books returned each time
        setOffset(offset-MAX_RESULT)
    }


    const handleNext = (e) => {
        // increase the offset by the max_books returned each time
        setOffset(offset+MAX_RESULT)
    }


    const updateBooks = (bookResultData) => {
        if(bookResultData=== null){
            setBooks(null)
            setTotalBooks(0)
        }
        else{

            setBooks(bookResultData.items)
            setTotalBooks(bookResultData.totalItems)
        }
    }


    const handleSearchChange = (e) => {
        // debounce the query that is pending as user is still typing
        clearTimeout(timer)
        setSearchedValue(e.target.value)
        const searchValue = e.target.value.trim()
        if(searchValue == ""){
            setBooks(null)
            setTotalBooks(0)
            return
        }
        setTimer(setTimeout(async ()=>{
            
            var data = ""
            if(signupState !== null){
                // when the user is signed in then populate with the data from google signup
                data = {"name":signupState.name,"email":signupState.email,"googleId":signupState.jti, "searchQuery":searchValue}
            }
            else{
                // when the user is not signed in then populate anonymous data
                data = {"name":"john doe","email":"johndoe@example.com","googleId":"1111", "searchQuery":searchValue}
            }
            console.log(data)
            postSearchMetric(data) // post metric to lambda api with the search query and the data from google signin
            const bookResultData = await getAPIData(searchValue, offset) // execute api and get book result as user has stopped typing
            updateBooks(bookResultData)
        }, 1000))  
    }

    return (
        <div>
            <div style={{display:"flex", flexDirection:"row-reverse", width:"75%"}}>
            {signupState==null?<Login />:<Logout />}
            </div>
            <h1 style={{textAlign:"center"}}>Search Books 📚</h1>
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