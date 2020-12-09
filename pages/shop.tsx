import Layout from '../components/Layout';
import Cart from '../components/Cart';
import CartSummary from '../components/CartSummary';
import Products from '../components/Products';

function Shop() {
  return(
    <Layout title="Shopping Cart | Next.js + TypeScript + React-Router">
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <Cart>
          <CartSummary />
          <Products />
        </Cart>
      </div>
    </Layout>
  );
}

export default Shop;
