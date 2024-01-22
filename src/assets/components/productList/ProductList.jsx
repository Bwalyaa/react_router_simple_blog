import ProductCard from "../productCard/ProductCard";

// console.log(data);

const ProductList = ({blogDatas}) => {
    console.log(blogDatas);
    return ( 
        <>
        {blogDatas.map((blogData, index)=> {
            return (
                <section key={index}>
                    <ProductCard 
                    id = {blogData.id}
                    title = {blogData.title}
                    img = {blogData.img_url}
                    />
                </section>
            )
        })}
        </>
     );
}
 
export default ProductList;