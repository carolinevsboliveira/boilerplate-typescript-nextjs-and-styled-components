import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from '../styles'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        An amazing boilerplate for learning
        <link rel="shortcut icon" href="/img/icon-512" />
        <link rel="apple-touch-icon" href="/img/icon-512" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple boilerplate to work with React, NextJs, Typescript and Styled-components
      "
        />
        <meta name="theme-color" content="#06092b" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
