import type { NextPage } from 'next'
import Head from 'next/head'
import { FullPage, Slide } from 'react-full-page';


import {Container} from '../styles/Home'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
        <meta name="description" content="Mouse Haunt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullPage duration={1000}>
        <Slide>
          <FirstSection/>
        </Slide>
        <Slide>
          <SecondSection/>
        </Slide>
        <Slide>
          <SecondSection/>
        </Slide>
      </FullPage>
    </Container>
  )
}

export default Home
