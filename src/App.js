import { useMutation } from "@tanstack/react-query"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/cart/Cart"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { cartTotal } from "./features/cart/cartSlice"
import Login from "./pages/login/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ResetPassword from "./pages/ResetPassword"
import { updateCartItems } from "./api/posts"
import Success from "./pages/success/Success"
import Cancel from "./pages/cancel/Cancel"
import Order from "./pages/Order"

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const { mutate } = useMutation({
    mutationFn: (cartItems) => updateCartItems(cartItems),
  })
  /* eslint-disable */
  useEffect(() => {
    dispatch(cartTotal())
    console.log(cartItems)
    if (cartItems !== null) {
      mutate(cartItems)
    }
  }, [cartItems])
  /* eslint-enable */

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={Cart} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/forgot_password" Component={ForgotPassword} />
          <Route path="/reset_password/:id/:token" Component={ResetPassword} />
          <Route path="/success" Component={Success} />
          <Route path="/cancel" Component={Cancel} />
          <Route path="/my_orders" Component={Order} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </>
  )
}

export default App
