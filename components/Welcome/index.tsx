import type { NextPage } from "next";

import {
  Container,
  Title,
  Subtitle,
  Video,
  Logo,
  Ellipse1,
  Ellipse2,
} from "./styles";
import Image from "next/image";

const Welcome: NextPage = () => {
  return (
    <Container id="About">
      <Title>
        Welcome to <b>MOUSE HAUNT</b>
      </Title>
      <Subtitle>
        Mouse Haunt provides a thrilling experience to every player throughout
        the play session. <br />
        Built in Unreal Engine 5, the game excels in making its peaceful moments
        feel fun by building up tension that unmistakably erupts in a satisfying
        high-action beat.
      </Subtitle>
      <Video>
        <Image
          src="/images/video-1.jpeg"
          width="808px"
          height="430px"
          alt="Video"
        />
      </Video>
      <Logo>
        <Image src="/images/logo.png" width="137px" height="137px" alt="Logo" />
      </Logo>
      <Ellipse1 />
      <Ellipse2 />
    </Container>
  );
};

export default Welcome;
