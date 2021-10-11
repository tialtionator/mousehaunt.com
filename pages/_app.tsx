import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { MoralisProvider } from 'react-moralis';
import config from '../utils/config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider appId={config.moralis.appId} serverUrl={config.moralis.serverUrl}> 
      <Component {...pageProps} />
    </MoralisProvider>
  )
}
export default MyApp
