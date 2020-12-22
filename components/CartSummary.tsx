import React, { useState, useEffect } from 'react';
import { Button, useToast, Text } from "@chakra-ui/react"
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
      <Text suppressHydrationWarning mt={3}>
        <strong>Number of Items:</strong>&nbsp; {cartCount}
      </Text>
      <Text suppressHydrationWarning mt={2}>
        <strong>Total:</strong>&nbsp; {formattedTotalPrice}
      </Text>

      {/* Redirects the user to Stripe */}
      <Button
        disabled={cartEmpty || loading}
        mt={2}
        color='red.500'
        w='100%'
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
      </Button>
      <Button
        color='green.500'
        w='100%'
        mt={2}
        className="cart-style-background"
        type="submit"
      >
        <strong>
          Checkout&nbsp;&nbsp; ✔
        </strong>
      </Button>

    </form>
  );
};

export default CartSummary;
