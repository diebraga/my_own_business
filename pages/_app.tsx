import { AppProps } from 'next/app'
import withReactRouter from '../next/with-react-router';

import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withReactRouter(MyApp)
