import BookSearchView from "./BookSearchView"

const SearchView = ({books}) => {


    if(books == null){
        return (
            <div style={{fontSize:"16px", fontWeight:"lighter", color:"gray"}}>Search to display books</div>
        )
    }
    else{

        return (
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                {books.map(book=> <BookSearchView volumeInfo={book.volumeInfo} key={book.id} id={book.id} />)}
            </div>
        )
        
    }
    
}

export default SearchView