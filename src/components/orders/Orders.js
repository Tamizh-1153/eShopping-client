import React from 'react'
import useOrderedItems from '../../hooks/useOrderedItems'
import { ScaleLoader } from "react-spinners"
import OrderCard from '../ordercard/OrderCard'
import useProducts from '../../hooks/useProducts'

const Orders = () => {
  useProducts()
  const {data,isLoading,isError} = useOrderedItems()
  console.log(data,isError,isLoading)

  if (isLoading) {
    return (
      <ScaleLoader
        style={{
          height: "25rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        color="#53ab99"
      />
    )
  }
  return (
    <section className="container product_container">
      {data?.orders.map((order, i) => (
        <OrderCard order={order} key={i} />
      ))}
    </section>
  )
}

export default Orders