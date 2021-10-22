import type { NextPage } from "next";

import {
  Container,
  Left,
  Right,
  Title,
  Subtitle,
  Phone,
  Ellipse,
} from "./styles";
import Ghost from "../../assets/svg/phone-4.svg";

const GhostHeroes: NextPage = () => {
  return (
    <Container>
      <Left>
        <Title>Ghost Villains NFT</Title>
        <Subtitle>
          When you die in a match, it’s not over, you get to play as a powerful
          ghost! NFTs with distinct abilities coming soon.
        </Subtitle>
      </Left>
      <Right>
        <Phone>
          <Ghost />
        </Phone>
      </Right>
      <Ellipse />
    </Container>
  );
};

export default GhostHeroes;
