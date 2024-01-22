const ProductDetails = () => {
    return ( 
        <>
        <div>
            <img src={img}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <h5>{author}</h5>
        </div>
        </>
     );
}
 
export default ProductDetails;