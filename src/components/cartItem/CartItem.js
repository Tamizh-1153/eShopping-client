import React from "react"
import { useDispatch } from "react-redux"
import './cartItem.css'
import { decreaseProduct, increaseProduct, removeProduct } from "../../features/cart/cartSlice"

const CartItem = ({ id, title, price, amount, image }) => {
  const dispatch = useDispatch()

  return (
    <div className="cart_item_container">
      <div className=" cart_item_left">
        <img src={image} alt="" />
        <div>
          <span>{title}</span>
          <span>&#8377;{price}</span>
        </div>
      </div>
      <div className="font_Size cart_item_right">
        <button
          className="font_Size cart_add_btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeProduct(id))
              return
            }
            dispatch(decreaseProduct(id))
          }}
        >
          -
        </button>
        <p>{amount}</p>
        <button
          className="font_Size cart_add_btn"
          onClick={() => dispatch(increaseProduct(id))}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem
