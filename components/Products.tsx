import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import { API_URL } from '../utils/url';
import { NextPage } from 'next';
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

interface Props {
  name: string
  sku: string
  image: string
  currency: string
  price: number
  description: string
}

const Products: NextPage = () => {
  const { addItem, removeItem } = useShoppingCart();
  const [cartEmpty, setCartEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const colorIcon = useColorModeValue('gray.700', 'teal.300')
  const { cartCount } = useShoppingCart();
  const [products, setProducts] = useState<Props[]>([]);

  useEffect(() => {
    // fetch from extwrnal api
    const fetchProduct = async () => {
    try {
        const res = await axios.get(`${API_URL}/products/`);
        setProducts(res.data);
    }
    catch (err) {
      alert('Error connection!')
    }
  }

    fetchProduct();
  }, []);

  const toast = useToast();

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  return (
    <>
    {/* Container */}
    <Wrap spacing={1} justify="center">
      {products.map((product: Props) => (
        
        // Card
        <WrapItem key={product.sku}>
          
          <Box mt={2} >
            <Box as='h1'>
              <Image className='prodimg' src={product.image} alt={product.name} />
              <Heading as='h4' size="xs" mt='10px'>
                {formatCurrencyString({
                  value: product.price,
                  currency: product.currency,
                })} EUR
              </Heading>
              {product.name}
            </Box>
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
                onClick={() => {removeItem(product.sku); toast({
                  title: "Item Removed.",
                  description: "Check your cart.",
                  status: "warning",
                  duration: 3000,
                  isClosable: true,
                  })
                }}
              >
                <AiFillMinusCircle className='btnicon' />
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
                <FaCartPlus className='btnicon' />
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

