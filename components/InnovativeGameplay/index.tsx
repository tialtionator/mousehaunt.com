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

const InnovativeGameplay: NextPage = () => {
  return (
    <>
      <Container>
        <Left>
          <Title>Innovative Gameplay</Title>
          <Subtitle>
            The ONLY multiplayer game where death is not the end! When a mouse
            dies it switches to the ghost team and continues to accumulate
            rewards. The best action NFT game!
          </Subtitle>
        </Left>
        <Right>
          <Hero>
            <Image
              src="/images/hero-6.png"
              width="227px"
              height="264px"
              alt="Phone"
            />
          </Hero>
          <Phone>
            <Image
              src="/images/gameplay-6.png"
              width="512px"
              height="287px"
              alt="Hero"
            />
          </Phone>
        </Right>
      </Container>
      <Ellipse />
    </>
  );
};

export default InnovativeGameplay;
