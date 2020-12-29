import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import products from '../data/products.json';
import { API_URL } from '../utils/url';
import { NextPage, GetStaticProps } from 'next';
import { 
  IconButton, 
  Wrap, 
  Image,  
  Heading,
  Box, 
  Spacer, 
  useColorModeValue,
  useToast,
  Flex, 
  WrapItem,
} from '@chakra-ui/react'
import { FaCartPlus } from 'react-icons/fa'
import { AiFillMinusCircle } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'

const Products: NextPage = () => {
  const { addItem, removeItem } = useShoppingCart();
  const [cartEmpty, setCartEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const colorIcon = useColorModeValue('gray.700', 'teal.300')
  const { cartCount } = useShoppingCart();

  const toast = useToast();

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  return (
    <>
    {/* Container */}
    <Wrap spacing={1} justify="center">
      {products.map((product) => (
        
        // Card
        <WrapItem key={product.slug}>
          
          <Box mt={2} >
            <Link href={`/products/${product.slug}`}>
            <Box as='h1' style={{ cursor: 'pointer' }}>
              <Image className='prodimg' src={product.image} alt={product.name} />
              <Heading as='h4' size="xs" mt='10px'>
                {formatCurrencyString({
                  value: product.price,
                  currency: product.currency,
                })} EUR
              </Heading>
              {product.name}
            </Box>
            </Link>
            <Flex>
              <Spacer />

                {/* Buttons */}
            <Box>
              <IconButton
                color={colorIcon}
                aria-label="Remove Item"
                borderRadius="full"
                boxSize='50px'
                variant="ghost"
                disabled={cartEmpty || loading}
                onClick={() => {removeItem(product.slug); toast({
                  title: "Item Removed.",
                  description: "Check your cart.",
                  status: "warning",
                  duration: 3000,
                  isClosable: true,
                  })
                }}
              >
                <AiFillMinusCircle size={20} />
              </IconButton> 

              <IconButton
                color={colorIcon}
                aria-label="Add Item"
                borderRadius="full"
                variant="ghost"
                boxSize='50px'
                onClick={() => {addItem(product); toast({
                  title: "Item added to cart.",
                  description: "Item added succesfully.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                  })
                }}
              >
                <FaCartPlus size={20} />
              </IconButton>

                <IconButton
                  colorScheme='pink'
                  aria-label="Add to wish list"
                  borderRadius="full"
                  variant="ghost"
                  boxSize='50px'
                  onClick={() => {addItem(product); toast({
                    title: "Item added to wishlist.",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                    })
                  }}
                >
                  <FiHeart size={20} />
                </IconButton>
              </Box>
            </Flex>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
    </>
  );
};

export default Products;


export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()

  return {
    props: {
        products
    }
  }
}
