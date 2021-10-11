import type { NextPage } from 'next'
import Head from 'next/head'
import { FullPage, Slide } from 'react-full-page';


import {Container} from '../styles/Home'
import FirstSection, { beforeChange } from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import config from './utils/config';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
      </Head>

      <FullPage duration={config.TRANSITION_DURATION} beforeChange={beforeChange}>
        <Slide>
          <FirstSection/>
        </Slide>
        <Slide>
          <SecondSection/>
        </Slide>
        <Slide>
          <ThirdSection/>
        </Slide>
      </FullPage>
    </Container>
  )
}

export default Home
