import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Confetti from 'react-confetti'
import { MdCheckCircle } from 'react-icons/md'

import Layout from '../components/Layout'
import Cart from '../components/Cart'
import ClearCart from '../components/ClearCart'

import { fetchGetJSON } from '../utils/api-helpers'
import useSWR from 'swr'

const ResultPage: NextPage = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }, 100)
  })

  const router = useRouter()

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  )

  if (error) return <div>failed to load</div>

  return (
    <Layout title="Checkout Payment Result | Next.js + TypeScript Example">
      <div className="page-container text-center align-items-center">
        <Confetti width={width} height={height} numberOfPieces={450} />
        <MdCheckCircle className="text-success" size={100} />
        <h1>Congrats!</h1>
        <p style={{ fontSize: '20px' }}>
          Your payment has been processed successfully!
        </p>
        <Cart>
          <ClearCart />
        </Cart>
      </div>
    </Layout>
  )
}

export default ResultPage
