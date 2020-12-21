import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const ClearCart: React.FC = () => {
  const { clearCart } = useShoppingCart();

  useEffect(() => clearCart(), [clearCart]);

  return <p>Cart cleared.</p>;
}

export default ClearCart;