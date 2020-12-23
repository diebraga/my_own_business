import { useState, useEffect } from 'react';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import products from '../data/products.json';
import { NextPage } from 'next';
import { 
  IconButton, 
  SimpleGrid, 
  Image,  
  Heading,
  Box, 
  Spacer, 
  useColorModeValue,
  useToast,
  Flex
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
    <SimpleGrid minChildWidth="150px" spacing={2} mt={10} p={2} className="products">
      {products.map((product) => (
        <Box maxWidth="300px" key={product.sku}>
          <Box>
            <Image src={product.image} alt={product.name} h='200px'/>
            <Box mt={2} as='h1'>{product.name}</Box>
            <Heading as='h4' size="xs" mt='10px'>
              {formatCurrencyString({
                value: product.price,
                currency: product.currency,
              })} EUR
            </Heading>
          </Box>
          
          <Flex minChildWidth="5px" pb={2} justifyItems='center'>
          <Spacer/>
            <IconButton
              color={colorIcon}
              aria-label="Remove Item"
              borderRadius="full"
              mt='10px'
              mr={1}
              boxSize='50px'
              variant="ghost"
              disabled={cartEmpty || loading}
              onClick={() => {removeItem(product.sku); toast({
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
                mt='10px'
                mr={1}
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
                mt='10px'
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
          </Flex>
        </Box>   
      ))}
    </SimpleGrid>
    </>
  );
};

export default Products;

