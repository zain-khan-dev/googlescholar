const BookCover = ({imgsrc}) => {
    if(imgsrc === ""){
        return <div></div>
    }
    else{
        return(
            <div >
                <img src={imgsrc} width="400px" height="500px"/>
            </div>
        )
    }
}

export default BookCover