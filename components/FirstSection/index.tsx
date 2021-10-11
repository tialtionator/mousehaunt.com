import type { NextPage } from 'next'

import {Container, Header, Hero} from './styles'
import Image from 'next/image'

const FirstSection: NextPage = () => {
  return (
    <Container id="home">
      <Header>
        <div className="left">
          <a href="#home">
            <Image
              src="https://s3.amazonaws.com/assets.mousehaunt.com/images/MH_Shinny_Logo.svg" 
              width="53px"
              height="60px"
              alt="logo"/>
          </a>
        </div>
        <div className="right">
          <a href="#home">
            Home
          </a>
          <a href="#video">
            Video
          </a>
          <a href="#whitelist">
            Whitelist
          </a>
        </div>
      </Header>

      <Hero>
        <div className="top">
          <div className="mouse">MOUSE</div>
          <div className="haunt">HAUNT</div>
        </div>
        <div className="bottom">
          <span>
            Mouse Haunt is a rewarding, innovative and ever-growing universe where players can choose from different games to play and ways to earn, using the same NFTs between games. Buint in Unreal Engine 5 and integrated with Binance Chain.
          </span>
          <div className="stores">
            <span>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png"
              width="148px"
              height="45px"
              alt="Get it on Google Play"/>
            </span>
            <span>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
              width="148px"
              height="45px"
              alt="Download on the App Store"/>
            </span>
          </div>
          <small><i>Coming soon</i></small>
        </div>
      </Hero>
      
      <video autoPlay muted loop>
        <source src="https://s3.amazonaws.com/assets.mousehaunt.com/videos/Movie_4secondloop.mp4" type="video/mp4"></source>
      </video>
    </Container>
  )
}



export default FirstSection
