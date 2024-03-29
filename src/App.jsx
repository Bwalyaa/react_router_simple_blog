
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Blog from './pages/blog/Blog'
import ProductDetails from './assets/components/productDetails/ProductDetails'
import ProductList from './assets/components/productList/ProductList'


function App() {


  return (
    <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path='/productDetails/:IchBinEinIdVonUseParams' element={<ProductDetails/>} />
   </Routes>
    </>
  )
}

export default App
