import { useQuery } from "@tanstack/react-query"
import { getCartItems } from "../api/posts"
import { useDispatch } from "react-redux"
import { addCartItems } from "../features/cart/cartSlice"

const useCartItems = () => {

  const dispatch = useDispatch()
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => getCartItems(),
  })
  if(!isLoading && !isError) {
    dispatch(addCartItems(data.cart))
  }
  return {
    data,
    isError,
    isLoading,
  }
}

export default useCartItems
