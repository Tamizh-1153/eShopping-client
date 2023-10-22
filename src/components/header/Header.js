import React, { useEffect } from "react"
import "./header.css"
import brandLogo from "../../assets/Screenshot 2023-10-12 065511.png"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Avatar, Button } from "@mantine/core"
import useUserDetails from "../../hooks/useUserDetails"
import AccountMenu from "../accountMenu/AccountMenu"
import useCartItems from "../../hooks/useCartItems"

const Header = () => {
  const { amount } = useSelector((store) => store.cart)
  const { user } = useSelector((store) => store.user)
  const refresh = useNavigate()

  useUserDetails()
  useCartItems()
  return (
    <header className=" container header">
      <div className="nav-left">
        <img src={brandLogo} alt="eShopping" onClick={()=>refresh('/')} />
      </div>
      <div className="nav-right">
        {!user ? (
          <Button className="h_sign_in" variant="transparent" color="red">
            <Link to="/login">Sign in</Link>
          </Button>
        ) : (
          <AccountMenu user={user} />
        )}
        <div className="h_cart">
          <p>{amount}</p>
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
