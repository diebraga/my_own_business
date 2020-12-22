import React, { useState, useEffect } from 'react';
import { MenuItem, useToast } from "@chakra-ui/react"
import { useShoppingCart } from 'use-shopping-cart';
import { fetchPostJSON } from '../utils/api-helpers';

const CartSummary: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart();

  const toast = useToast();

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      cartDetails
    );

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    redirectToCheckout({ sessionId: response.id });
  };

  return (
    <form onSubmit={handleCheckout}>
      {/* This is where we'll render our cart */}
      <MenuItem suppressHydrationWarning>
        <strong>Number of Items:</strong>&nbsp; {cartCount}
      </MenuItem>
      <MenuItem suppressHydrationWarning>
        <strong>Total:</strong>&nbsp; {formattedTotalPrice}
      </MenuItem>

      {/* Redirects the user to Stripe */}
      <MenuItem
        color='green.500'
        className="cart-style-background"
        type="submit"
      >
        <strong>
          Checkout&nbsp;&nbsp; ✔
        </strong>
      </MenuItem>
      <MenuItem
        disabled={cartEmpty || loading}
        color='red.500'
        className="cart-style-background"
        type="button"
        onClick={() => {clearCart(); toast({
          title: "Item Cleared.",
          description: "Your cart is empty.",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      }}
      >
        <strong>
          Clear Cart&nbsp;&nbsp; ❌
        </strong>
      </MenuItem>
    </form>
  );
};

export default CartSummary;
