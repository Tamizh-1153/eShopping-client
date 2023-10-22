import React from "react"
import useProducts from "../../hooks/useProducts"
import ProductCard from "../productCard/ProductCard"
import "./products.css"
import { ScaleLoader } from "react-spinners"


const Products = () => {
  const { data, isLoading } = useProducts()

  if (isLoading) {
    return <ScaleLoader style={{display:'flex',justifyContent:'center'}} color="#36d7b7" />
  }

  return (
    <section className="container product_container">
      {data?.products.map((card, i) => (
        <ProductCard card={card} key={i} />
      ))}
    </section>
  )
}

export default Products
