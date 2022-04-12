import axios from "axios"
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import BookCover from "../Components/BookCover"
import BookMetadata from "../Components/BookMetadata"
import BookHeader from "../Components/BookHeader"
import { GOOGLE_BOOKS_VOLUME_API } from "../common/Constants"


const DetailedBook = () => {

    // get the volume id for which details of the books are needed from url
    const volumeId = useParams().id 

    const [metadata, setMetadata] = useState(null)


    useEffect(()=>{
        axios.get(`${GOOGLE_BOOKS_VOLUME_API}${volumeId}`)
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