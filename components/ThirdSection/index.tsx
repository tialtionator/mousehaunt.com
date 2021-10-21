import type { NextPage } from "next";

import {
  Container,
  Left,
  Right,
  Title,
  Subtitle,
  Hero,
  Phone,
  Ellipse,
} from "./styles";
import Image from "next/image";
import { Button } from "../Button";

const ThirdSection: NextPage = () => {
  return (
    <Container>
      <Left>
        <Hero>
          <Image
            src="/images/hero.png"
            width="512px"
            height="287px"
            alt="Hero"
          />
        </Hero>
        <Phone>
          <Image
            src="/images/phone-3.png"
            width="640px"
            height="497px"
            alt="Phone"
          />
        </Phone>
      </Left>
      <Right>
        <Title>Mouse Heroes NFT</Title>
        <Subtitle>
          Collect the rarest characters with the best stats! Mouse heroes also
          have different abilities depending on their tail, weapon and hat!
          Booster airdrop with our WHITELIST!
        </Subtitle>
        <Button>JOIN WHITELIST</Button>
      </Right>
      <Ellipse />
    </Container>
  );
};

export default ThirdSection;
