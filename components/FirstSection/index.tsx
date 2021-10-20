import type { NextPage } from "next";

import { Container, Header, Logo, Sections } from "./styles";
import { Button } from "../../components/Button";
import beforeChange, { hideFirst } from "./beforeChange";
import Image from "next/image";

const FirstSection: NextPage = () => {
  const sections = [
    "About",
    "Gameplay",
    "Value Proposition",
    "Token",
    "Tokenomics",
    "Team",
    "Roadmap",
  ];
  return (
    <Container>
      <Header>
        <Logo>
          <a>
            <Image
              src="/images/logo.png"
              width="90px"
              height="90px"
              alt="logo"
            />
          </a>
        </Logo>
        <Sections total={sections.length}>
          {sections.map((section) => (
            <a key={section} href={`#${section}`}>
              {section}
            </a>
          ))}
        </Sections>
        <Button>JOIN WHITELIST</Button>
      </Header>
    </Container>
  );
};

export default FirstSection;
export { beforeChange, hideFirst };
