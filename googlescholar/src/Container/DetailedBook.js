import axios from "axios"
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import BookCover from "../Components/BookCover"
import BookMetadata from "../Components/BookMetadata"
import BookHeader from "../Components/BookHeader"
const DetailedBook = () => {

    const volumeId = useParams().id

    const [metadata, setMetadata] = useState(null)


    useEffect(()=>{
        // axios.get()
        axios.get(`https://www.googleapis.com/books/v1/volumes/${volumeId}`)
        .then((result) => {
            console.log(result.data.volumeInfo)
            setMetadata(result.data.volumeInfo)
        })
        .catch((e)=>{
            console.log("Failed with exception "+ e)
        })
    }, [])

    if(metadata == null){
        return (
            <div>Loading</div>
        )
    }
    return (
        <div style={{display:"flex",padding:"20px", flexDirection:"column", textAlign:"center", margin:"0 auto", width:"50%", backgroundColor:"#D3D3D3"}}>
            <BookHeader title={metadata.title}/>
            <BookCover imgsrc={metadata.imageLinks.thumbnail}/>
            <BookMetadata metadata={metadata} />
        </div>
    )
}


export default DetailedBook