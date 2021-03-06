import type { NextPage } from "next";

import {
  Container,
  Title,
  Subtitle,
  Ellipse1,
  Ellipse2,
  Box,
  BoxContent,
  Text,
  Mice,
  Mouse1,
  Mouse2,
} from "./styles";
import Image from "next/image";
import { Button } from "../Button";

const Whitelist: NextPage = () => {
  return (
    <Container id="About">
      <Title>
        Join the <b>WHITELIST</b>
      </Title>
      <Box>
        <BoxContent>
          <Subtitle>
            Connect your wallet and become part of the
            <br />
            <b>MOUSE HAUNT UNIVERSE</b>
          </Subtitle>
          <Text>
            <span className="first">
              This is without a doubt the best time to join the Mouse Haunt
              Universe.
            </span>
            <br />
            <span className="second">
              Acquire MHT now to become one of the earliest people to join!
              Don&apos;t let the opportunity slip. Join Now.
            </span>
          </Text>
          <Button>JOIN WHITELIST</Button>
        </BoxContent>
        <Mice>
          <Mouse1>
            <Image
              src="/images/mouse-1.png"
              width="439px"
              height="568px"
              alt="Mouse 1"
            />
          </Mouse1>
          <Ellipse1 />
          <Mouse2>
            <Image
              src="/images/mouse-2.png"
              width="452px"
              height="552px"
              alt="Mouse 2"
            />
          </Mouse2>
          <Ellipse2 />
        </Mice>
      </Box>
    </Container>
  );
};

export default Whitelist;
