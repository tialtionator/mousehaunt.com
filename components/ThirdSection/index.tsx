import type { NextPage } from 'next'

import {Container} from './styles'
import Image from 'next/image'
import AuthenticateButton from '../../components/AuthenticateButton'

const ThirdSection: NextPage = () => {
  return (
    <Container id="whitelist">
      <div className="left">
        <div className="top">
          <div>
            <span className="mouse">JOIN{' '}</span>
            <span className="haunt">THE</span>
          </div>
          <div>
            <span className="haunt">WHITE</span>
            <span className="mouse">LIST</span>
          </div>
        </div>
        <div className="bottom">
          <span>
            Connect your wallet and become part<br/>
            of the Mouse Haunt Universe.
          </span>
        </div>
        <div className="bottom authenticate">
          <AuthenticateButton/>
        </div>
      </div>
      <div className="image">
        <Image src="https://s3.amazonaws.com/assets.mousehaunt.com/images/MainMenu_No-Columns.png"
        width="1600px" height="1000px" layout="responsive" objectFit="cover"
        alt="Main Menu"/>
      </div>
    </Container>
  )
}



export default ThirdSection
