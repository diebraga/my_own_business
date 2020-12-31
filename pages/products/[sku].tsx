import { NextPage, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { API_URL } from '../../utils/url';
import Navbar from '../../components/Navbar';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import { useState, useEffect } from 'react';
import Cart from '../../components/Cart';
import { 
  Text, 
  Image,  
  Heading,
  Box, 
  SimpleGrid,
  useToast,
  useColorModeValue, 
} from '@chakra-ui/react'

const ProductView: NextPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { addItem, removeItem } = useShoppingCart();
  const [cartEmpty, setCartEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const bg = useColorModeValue('tomato', 'black')
  const { cartCount } = useShoppingCart();
  
  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  return (
    <>
    <>
    <Navbar />
      <SimpleGrid 
        minChildWidth={{ md: '312px' }}
        padding={{ sm: '40px' }}
        spacing="40px">
        <Box bg="tomato" height="100%">
          <Image 
            src={product.image}
          />
        </Box>
        <Box bg={bg} height="100%">
          <Box my={12} ml={{ base: '10px', md: '20px'}} mr={{ md: '20px' }}>
            <Heading as='h1'>Next commerce</Heading>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>
              {formatCurrencyString({
                value: product.price,
                currency: product.currency,
              })} EUR
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </>
    </>  
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

export const getStaticPaths: GetStaticPaths = async () => {
  // Get external data from the file system, API, DB, etc.
  const res = await fetch(`${API_URL}/products`)
  const products: Products[] = await res.json()
  return {
      paths: products.map(product => ({
          params: {sku: String(product.sku)}
      })),
      fallback: false
  };
}


export async function getStaticProps({params: { sku }}) {
  const res = await fetch(`${API_URL}/products/?sku=${sku}`)
  const product: Products[] = await res.json()

  return {
    props: {
        product: product[0]
    }
  }
}

  
export default ProductView