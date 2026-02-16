import ProductCard from "./ProductCard"
import { useEffect}  from "react"
import {useDispatch, useSelector} from "react-redux"
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../features/products/productApi";
const ProductList = () => {

    const dispatch = useDispatch();
    //-----REDUX---------
    // const {products, loading, error}= useSelector(state => state.products);

    //-----NORMALISATION--------
    //const {entities, ids, loading, error}= useSelector(state => state.products);
    //const products = ids.map((id) => entities[id]);

    //-----REDUX THUNK---------
    // useEffect(()=>{
    //     dispatch(fetchProducts());
    // }, [dispatch])

    // if(loading){
    //     <p>Loading...</p>
    // }

    //-------APPLIED REACT QUERY---------
    const {data:products, isLoading, error} = useQuery({
        queryKey: ["products"],
        queryFn : fetchProducts,
        staleTime: 1000 * 60 * 5,
    });

    if(isLoading){
        <p>Loading...</p>
    }

    if(error){
        <p>Error!</p>
    }

  return (
    <div className="flex-3 grid grid-cols-4 gap-6">
        {products && products.map((item) => (
            <ProductCard item = {item}/>
            )
            )
        }
    </div>
  )
}

export default ProductList