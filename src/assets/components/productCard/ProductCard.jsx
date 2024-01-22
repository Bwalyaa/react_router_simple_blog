import { Link } from "react-router-dom";

const ProductCard = ({img, id, title}) => {
    console.log("ProductCardID",id);
    return ( 
        <>
        <div>
            <img src={img} />
            <h2>{title}</h2>
            <Link to={`/ProductDetails/${id}`}><button>Read More</button></Link>
        </div>
        </>
     );
}
 
export default ProductCard;