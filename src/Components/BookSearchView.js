import BookMetadata from "./BookMetadata"
import { Link } from "react-router-dom"
const BookSearchView = ({volumeInfo, id}) => {

    return (
        <Link to={`/book/${id}`}>
            <div style={{display:"flex", flexDirection:"column" ,margin:"10px", padding:"10px",  borderRadius:"10px"}}>
                <div style={{border:"2px solid black",padding:"10px", height:"200px" , width:"150px", textAlign:"center"}}>
                    {volumeInfo.imageLinks != null?<img  src={volumeInfo.imageLinks.thumbnail}  width="150px" height="200px" />:<div>No preview found</div>}
                </div>
                <div key={id} style={{textAlign:"center", width:"150px"}}>
                    {volumeInfo.title}
                </div>
            </div>
        </Link>
    )

}

export default BookSearchView