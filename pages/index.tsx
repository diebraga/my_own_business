import Layout from '../components/Layout';
import ShopCart from '../components/ShopCart';
import Cart from '../components/Cart';

import { NextPage } from 'next';

const Shop: NextPage = () => {
  return(
    <Layout title="Shopping Cart | Next.js + TypeScript + React-Router">
      <Cart>
        <ShopCart />
      </Cart>
    </Layout>
  );
}

export default Shop;
