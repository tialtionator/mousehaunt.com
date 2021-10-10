import type { NextPage } from 'next'
import Head from 'next/head'

import Container from '../styles/Home'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
        <meta name="description" content="Mouse Haunt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <video autoPlay muted loop>
          <source src="https://s3.amazonaws.com/assets.mousehaunt.com/videos/TrailerCompress_v0_MouseHaunt.mp4" type="video/mp4"></source>
        </video>
      </main>

      <footer>
      </footer>
    </Container>
  )
}

export default Home
