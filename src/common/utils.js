import {LAMBDA_URL} from "./Constants"
import axios from "axios"
import { GOOGLE_BOOKS_API} from "./Constants"

export const postSearchMetric = (data) => {
    // make post request to lambda function to save the user search metric on each search
    axios.post(LAMBDA_URL.trim(), data=data)
    .then((result)=> {
        console.log("Data posted successfully ")
    })
    .catch((e)=> {
        console.log("Error posting data "+ e)
    })
}


export const getAPIData = async (searchValue, offset) => {
    // Based on the search value make api call to the google books api
    searchValue = searchValue.trim()
    if(searchValue == ""){ 
        return null // the search was empty return without making call 
    }
    try{
        const result = await axios.get(`${GOOGLE_BOOKS_API}${searchValue}&startIndex=${offset}`)
        return result.data
    }
    catch(e) {
        console.log(e)
    }
}