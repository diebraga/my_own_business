import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';

interface Props {
  sku: string;
  image?: string;
  name: string;
  descrption?: string;
  price: number;
  currency: string; 
  value: number;
}

const Products = () => {
  const [products, setProducts] = useState<Props[]>([]);
  const { addItem, removeItem } = useShoppingCart();

  useEffect(() => {
    const fetchProduct = async () => {
    try {
        const res = await axios.get(`http://localhost:8000/api/products/`);
        setProducts(res.data);
    }
    catch (err) {
      alert('Error connection!')
    }
  }

    fetchProduct();
  }, []);

  return (
    <section className="products">
      {products.map((product) => (
        <div key={product.sku} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <h2>{product.descrption}</h2>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          <button
            className="cart-style-background"
            onClick={() => addItem(product)}
          >
            Add to cart
          </button>
          <button
            className="cart-style-background"
            onClick={() => removeItem(product.sku)}
          >
            Remove
          </button>
        </div>
      ))}
    </section>
  );
};

export default Products;
