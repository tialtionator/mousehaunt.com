import type { NextPage } from "next";

import {
  Container,
  Left,
  Right,
  Title,
  Subtitle,
  Chest,
  Ellipse,
} from "./styles";
import Image from "next/image";
import { Button } from "../Button";

const MHT: NextPage = () => {
  return (
    <>
      <Container>
        <Left>
          <Chest>
            <Image
              src="/images/MHT.png"
              width="512px"
              height="338px"
              alt="MHT"
            />
          </Chest>
        </Left>
        <Right>
          <Title>HAVE FUN AND EARN!</Title>
          <Subtitle>
            Showcase your unique NFTs and your kickass skills in our action
            packed online multiplayer. The better you are, the more rewards you
            get! Invite your friends and get rewards!
          </Subtitle>
          <Button>JOIN WHITELIST</Button>
        </Right>
      </Container>
      <Ellipse />
    </>
  );
};

export default MHT;
