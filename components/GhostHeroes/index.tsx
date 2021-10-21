import type { NextPage } from "next";

import {
  Container,
  Left,
  Right,
  Title,
  Subtitle,
  Ghost,
  Ghost2,
  Ghost3,
  Phone,
  Ellipse,
} from "./styles";
import Image from "next/image";

const GhostHeroes: NextPage = () => {
  return (
    <Container>
      <Left>
        <Title>
          Ghost Heroes NFT
          <br />
          (coming soon)
        </Title>
        <Subtitle>
          When you die in a match, it’s not over, you get to play as a powerful
          ghost! NFTs with distinct abilities coming soon.
        </Subtitle>
      </Left>
      <Right>
        <Ghost>
          <Image
            src="/images/ghost.png"
            width="540px"
            height="424px"
            alt="Ghost"
          />
        </Ghost>
        <Phone>
          <Image
            src="/images/phone-4.png"
            width="640px"
            height="497px"
            alt="Phone"
          />
        </Phone>
        <Ghost2>
          <Image
            src="/images/ghost.png"
            width="540px"
            height="424px"
            alt="Ghost"
          />
        </Ghost2>
        <Ghost3>
          <Image
            src="/images/ghost.png"
            width="540px"
            height="424px"
            alt="Ghost"
          />
        </Ghost3>
      </Right>
      <Ellipse />
    </Container>
  );
};

export default GhostHeroes;
