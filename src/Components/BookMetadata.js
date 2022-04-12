const MetadataHeading = ({section}) => {
    return(
    <div style={{fontSize:"30px", fontWeight:"bolder", marginTop:"10px", marginBottom:"10px", color:"brown" ,textDecoration:"underline"}}>{section}</div>
    )
}
const BookMetadata = ({metadata}) => {



    return(
        <div style={{display:"flex", flexDirection:"column", margin:"0 auto", textAlign:"center", justifyContent:"space-between", justifyItems:"center"}}>
            <MetadataHeading section="About" />
            <div className="description" dangerouslySetInnerHTML={{__html: metadata.description}}    />
            <MetadataHeading section="Written By" />
            <div className="author">{metadata.authors.join(" ,")}</div>
            <MetadataHeading section="Category" /> 
            <div className="category">{metadata.categories}</div>
            <MetadataHeading section="Published Date" />
            <div className="pubDate">{metadata.publishedDate}</div>
        </div>
    )
}

export default BookMetadata