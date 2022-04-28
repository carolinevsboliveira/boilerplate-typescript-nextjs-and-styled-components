import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from './styles'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>An amazing boilerplate for learning</Head>
      <link rel="shortcut icon" href="/img/programming_512" />
      <link rel="apple-touch-icon" href="/img/programming_512" />
      <meta
        name="description"
        content="A simple boilerplate to work with React, NextJs, Typescript and Styled-components
      "
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
