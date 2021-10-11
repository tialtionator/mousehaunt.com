import type { NextPage } from 'next'

import {Container} from './styles'

const FirstSection: NextPage = () => {
  return (
    <Container>
      <video autoPlay muted loop>
        <source src="https://s3.amazonaws.com/assets.mousehaunt.com/videos/TrailerCompress_v0_MouseHaunt.mp4" type="video/mp4"></source>
      </video>
    </Container>
  )
}

export default FirstSection
