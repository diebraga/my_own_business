import React from 'react'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { AppProps } from 'next/app'
import '../styles.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const theme = extendTheme({
    colors: {
      brand: {
        100: "#f7fafc",
        // ...
        900: "black",
      },
    },
  })
  
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
