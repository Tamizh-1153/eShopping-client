import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../api/posts"
import { useDispatch } from "react-redux"
import { addProducts } from "../features/cart/cartSlice"

const useProducts = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  })
  if (!isLoading) {
    dispatch(addProducts(data.products))
  }
  return {
    data,
    isError,
    isLoading,
  }
}

export default useProducts
