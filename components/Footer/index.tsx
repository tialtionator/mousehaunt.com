import type { NextPage } from "next";

import { Container, Title, Social, Logo, Ellipse1, Ellipse2 } from "./styles";
import Image from "next/image";
import { svg } from "../../utils/svg";

const Footer: NextPage = () => {
  const social = {
    twitter: "https://twitter.com/mousehaunt",
    discord: "https://discord.gg/NWmPx3MGY8",
  };
  return (
    <Container>
      <Logo>
        <Image src="/images/logo.png" width="144px" height="144px" alt="Logo" />
      </Logo>
      <Title>JOIN OUR COMMUNITY</Title>
      <Social>
        {Object.keys(social).map((network) => (
          <a
            key={network}
            href={(social as any)[network]}
            target="_blank"
            rel="noreferrer"
          >
            {svg(network)}
          </a>
        ))}
      </Social>
      <Ellipse1 />
      <Ellipse2 />
    </Container>
  );
};

export default Footer;
