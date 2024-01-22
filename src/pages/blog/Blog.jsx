import ProductList from "../../assets/components/productList/ProductList";
import data from "../../data/data"

const Blog = () => {
    return ( 
        <>
        <ProductList 
        blogDatas={data}
        />
        </>
     );
}
 
export default Blog;