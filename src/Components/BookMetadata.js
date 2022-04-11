const MetadataHeading = ({section}) => {
    return(
    <div style={{fontSize:"30px", fontWeight:"bolder", marginTop:"10px", marginBottom:"10px", color:"brown" ,textDecoration:"underline"}}>{section}</div>
    )
}
const BookMetadata = ({metadata}) => {


    console.log(metadata)

    return(
        <div style={{display:"flex", flexDirection:"column", margin:"0 auto", textAlign:"center", justifyContent:"space-between", justifyItems:"center"}}>
            <MetadataHeading section="About" />
            <div dangerouslySetInnerHTML={{__html: metadata.description}}    />
            <MetadataHeading section="Written By" />
            <div>{metadata.authors.join(" ,")}</div>
            <MetadataHeading section="Genre" /> 
            <div>{metadata.categories}</div>
            <MetadataHeading section="Published Date" />
            <div>{metadata.publishedDate}</div>
        </div>
    )
}

export default BookMetadata