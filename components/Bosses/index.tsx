import type { NextPage } from "next";

import {
  Container,
  Mice,
  Title,
  Subtitle,
  Video,
  Ellipse1,
  Ellipse2,
} from "./styles";
import Image from "next/image";

const Bosses: NextPage = () => {
  return (
    <>
      <Container>
        <Mice>
          <Image
            src="/images/mice.png"
            width="334.28px"
            height="239.62px"
            alt="Mic"
          />
          <Ellipse1 />
        </Mice>
        <Title>
          Bosses, you said?! <b>WE HAVE&apos;EM</b>
        </Title>
        <Subtitle>
          In the Mouse Haunt Universe, the danger lies everywhere. We bring you
          player controlled Environmental Bosses! Ghosts control from furnaces
          to wrecking balls. Killing Mouse Heroes creatively, with style!
        </Subtitle>
        <Video>
          <Image
            src="/images/bosses.png"
            width="505px"
            height="380px"
            alt="Bosses"
          />
        </Video>
      </Container>
      <Ellipse2 />
    </>
  );
};

export default Bosses;
