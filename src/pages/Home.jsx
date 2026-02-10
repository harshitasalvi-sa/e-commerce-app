import Cart from "../components/Cart"
import Navbar from "../components/Navbar"
import ProductList from "../components/ProductList"

const Home = () => {
  return (
    <div >
        <Navbar/>
        <div className="flex flex-row gap-8 ">
            <ProductList/>
            <Cart/>
        </div>
    </div>
  )
}

export default Home