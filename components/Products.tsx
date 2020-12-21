import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import products from '../data/products.json';
import { NextPage } from 'next';
import { Button } from '@chakra-ui/react'

const Products: NextPage = () => {
  const { addItem, removeItem } = useShoppingCart();

  return (
    <section className="products">
      {products.map((product) => (
        <div key={product.sku} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          <Button
            className="cart-style-background"
            onClick={() => addItem(product)}
          >
            Add to cart
          </Button>
          <Button
            className="cart-style-background"
            onClick={() => removeItem(product.sku)}
          >
            Remove
          </Button>
        </div>
      ))}
    </section>
  );
};

export default Products;
