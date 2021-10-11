import type { NextPage } from 'next'
import Head from 'next/head'
import { FullPage, Slide } from 'react-full-page';

import {Container} from '../styles/Home'
import FirstSection, { beforeChange, hideFirst } from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import config from '../utils/config';
import { useEffect, useState } from 'react';
import isMobile from '../utils/isMobile';

const Home: NextPage = () => {
  const [ref, setRef] = useState()

  // useEffect(() => {
  //   if(isMobile()) {
  //     window.addEventListener("scroll", function(e) {
  //       const first = document.getElementsByClassName('first') as unknown as HTMLElement[];
  //       hideFirst(first)
  //     })
  //   }
  // }, [])

  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
      </Head>

      <FullPage ref={(r: any) => r && setRef(r)} 
        duration={config.TRANSITION_DURATION} 
        beforeChange={beforeChange} >
        <Slide>
          <FirstSection scrollToSlide={(ref as any)?.scrollToSlide}/>
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
