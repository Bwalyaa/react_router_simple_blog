import { Link } from "react-router-dom";
import Nav from "../../assets/components/nav/Nav";

const Home = () => {
    return ( 
        <>
        <Nav />
        <h2>Home Page</h2>
        <Link to="/Blog"><button>go to articles</button></Link>
        </>
     );
}
 
export default Home;