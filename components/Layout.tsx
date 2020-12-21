import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './ShopCart';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'TypeScript Next.js Stripe Example',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
      {children}
    </div>
  </>
);

export default Layout;
