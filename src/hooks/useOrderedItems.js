import { useQuery } from "@tanstack/react-query"
import { getOrders } from "../api/posts"

const useOrderedItems = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(),
  })
  return {
    data,
    isError,
    isLoading,
  }
}

export default useOrderedItems
