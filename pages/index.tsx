import { useState, useEffect } from 'react';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import { API_URL } from '../utils/url';
import Link from 'next/link';
import { NextPage, InferGetStaticPropsType } from 'next';
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
import Layout from '../components/Layout'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'

const Shop: NextPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { addItem, removeItem } = useShoppingCart();
  const [cartEmpty, setCartEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const colorIcon = useColorModeValue('gray.700', 'teal.300')
  const { cartCount } = useShoppingCart();
  
  const toast = useToast();

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  return (
    <Layout title="Shopping Cart | Next.js + TypeScript + Strapi">
      <Cart>
        <Navbar />
          <div className='container'>
        {/* Container Product */}
        <Wrap spacing={1} justify="center">
          {products.map((product) => (
            
            // Card
            <WrapItem key={product.sku}>
              
              <Box mt={2} >
              <Link href={`/products/${product.sku}`}>
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
      </div>
      </Cart>
    </Layout>
  )
}

type Products = {
  sku: string
  name: string
  price: number
  description: string
  image: string
  currency: string
}

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/products/`)
  const products: Products[] = await res.json()

  return {
    props: {
      products,
    },
  }
}

export default Shop
