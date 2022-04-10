import BookSearchView from "./BookSearchView"

const SearchView = ({books}) => {


    if(books == null){
        return (
            <div>Please make a search to display books here</div>
        )
    }
    else{

        return (
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                {books.items.map(book=> <BookSearchView volumeInfo={book.volumeInfo} id={book.id} />)}
            </div>
        )
        
    }
    
}

export default SearchView