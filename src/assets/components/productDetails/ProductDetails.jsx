import { useParams } from "react-router-dom";
import data from "../../../data/data"
import { Link } from "react-router-dom";

const ProductDetails = () => {
    //                       die runde klammer bleibt immer leer
    const idParam = useParams()
    console.log(idParam.IchBinEinIdVonUseParams);

    const searchedData = data.filter((e)=>{
        return e.id === Number(idParam.IchBinEinIdVonUseParams)
    })

    console.log(searchedData);


    return ( 
        <>
     <img src={searchedData[0].img_url} />   
     <h2>{searchedData[0].title}</h2>
     <p>{searchedData[0].description}</p>
     <h5>{searchedData[0].author}</h5>
     <Link to="/blog"><button>back to blog</button></Link>
        </>
     );
}
 
export default ProductDetails;