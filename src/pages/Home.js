import React from 'react'
import Header from '../components/header/Header'
import Products from '../components/products/Products'
import Banner from '../components/banner/Banner'
import AccountMenu from '../components/accountMenu/AccountMenu'

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Products />
        <AccountMenu/>
    </div>
  )
}

export default Home