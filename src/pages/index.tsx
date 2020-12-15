import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Nextjs Structure + Styled components</h1>
      <p>A ReactJS + Next.js Ecommerce.</p>
      <Link href="/shop">
        <button>Shop now!</button>
      </Link>
    </Container>
  )
}

export default Home
