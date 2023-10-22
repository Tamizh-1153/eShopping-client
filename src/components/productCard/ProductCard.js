import React from "react"
import "./productCard.css"
import { useDispatch, useSelector } from "react-redux"
import {
  addToCart,
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../../features/cart/cartSlice"
import { useMutation } from "@tanstack/react-query"
import { updateCartItems } from "../../api/posts"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ card }) => {
  const dispatch = useDispatch()
  const refresh = useNavigate()
  const { cartItems } = useSelector((store) => store.cart)
  const { user } = useSelector((store) => store.user)
  const productId = cartItems?.map((item) => item.id)
  const inCart = productId?.includes(card.id)

  const addedToCart = cartItems?.filter((item) => item.id === card.id)

  return (
    <div className="card_container">
      <div className="p_image_container">
        <img src={card?.image} alt="" />
      </div>
      <div className="p_title">{card?.title}</div>
      <div className="p_price">
        <span>&#8377;</span> {card?.price}
      </div>
      {!inCart ? (
        <button
          className="add_cart_btn"
          onClick={() => {
            if (!user) {
              refresh("/login")
            } else {
              dispatch(addToCart(card.id))
            }
          }}
        >
          Add to cart
        </button>
      ) : (
        <div className="product_card_add">
          <button
            onClick={() => {
              if (addedToCart[0].amount === 1) {
                dispatch(removeProduct(card?.id))
                return
              }
              dispatch(decreaseProduct(card?.id))
            }}
          >
            -
          </button>
          <p>{addedToCart[0].amount}</p>
          <button onClick={() => dispatch(increaseProduct(card?.id))}>+</button>
        </div>
      )}
    </div>
  )
}

export default ProductCard
