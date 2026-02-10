import ProductCard from "./ProductCard"
import { useEffect}  from "react"
import {useDispatch, useSelector} from "react-redux"
import { fetchProducts } from "../features/products/productSlice";
const ProductList = () => {

    const dispatch = useDispatch();
    const {products, loading, error}= useSelector(state => state.products);

    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch])

    if(loading){
        <p>Loading...</p>
    }

    if(error){
        <p>Error!</p>
    }

  return (
    <div className="flex-3 grid grid-cols-4">
        {products && products.map((item) => (
            <ProductCard item = {item}/>
            )
            )
        }
    </div>
  )
}

export default ProductList