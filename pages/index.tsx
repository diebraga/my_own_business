import Layout from '../components/Layout'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

import { NextPage } from 'next'

const Shop: NextPage = () => {
  return (
    <Layout title="Shopping Cart | Next.js + TypeScript + React-Router">
      <Cart>
        <Navbar />
        <Products />
      </Cart>
    </Layout>
  )
}

export default Shop
