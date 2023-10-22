import React from "react"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "../../components/cartItem/CartItem"
import "./cart.css"
import { clearCart } from "../../features/cart/cartSlice"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { checkout } from "../../api/posts"
import Header from "../../components/header/Header"

const Cart = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const { mutate } = useMutation({
    mutationFn: ({ cartItems, user }) => checkout({ cartItems, user }),
  })
  if (amount < 1) {
    return (
      <>
      <Header />
        <div className="empty_cart">
          <div>Your cart is empty</div>
          <Link to="/">
            <button className="shop_btn">Shop Now</button>
          </Link>
        </div>
      </>
    )
  }
  return (
    <>
      <Header />
      <section className="container ">
        <header className="cart_header">
          <h2>Your cart</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr />
          <div>
            <h4 className="cart_total">
              Total <span>&#8377;{total.toFixed(2)}</span>
            </h4>
          </div>
        </footer>
        <div className="clear_cart_container">
          <button className="clear_cart" onClick={() => {dispatch(clearCart())
          }}>
            <span>Clear Cart</span>
          </button>
          <button
            className="proceed_cart"
            onClick={() => mutate({ cartItems, user })}
          >
            <span>Proceed to checkout</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Cart
