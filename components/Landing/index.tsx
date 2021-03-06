import type { NextPage } from "next";

import {
  Container,
  Header,
  Logo,
  Video,
  Phone,
  Sections,
  Body,
  Title,
  Subtitle,
  Stores,
  BodyContent,
  Left,
  Right,
} from "./styles";
import { Button } from "../Button";
import Image from "next/image";

const Landing: NextPage = () => {
  const sections = [
    "About",
    "Gameplay",
    "Value Proposition",
    "Token",
    "Team",
    "Roadmap",
  ];
  return (
    <Container id="About">
      <Header>
        <Logo>
          <a href="#">
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
      <Body>
        <BodyContent>
          <Left>
            <Title>
              MOUSE
              <br />
              HAUNT
            </Title>
            <Subtitle>
              Mouse Haunt is a kick ass play to earn universe. Enjoy different
              ways to earn with amazing gameplay. Here, fun comes first. Play
              on!
            </Subtitle>
            <Stores>
              <div>
                <span>
                  <Image
                    src="/images/Google_Play.png"
                    width="148px"
                    height="45px"
                    alt="Get it on Google Play"
                  />
                </span>
                <span>
                  <Image
                    src="/images/App_Store.png"
                    width="148px"
                    height="45px"
                    alt="Download on the App Store"
                  />
                </span>
              </div>
              <small>
                <i>Coming soon</i>
              </small>
            </Stores>
          </Left>
          <Right>
            <Video>
              <Phone />
              <video
                loop
                muted
                autoPlay
                src="/videos/LandingPage.mp4"
                width="600px"
                height="293px"
              />
            </Video>
          </Right>
        </BodyContent>
      </Body>
    </Container>
  );
};

export default Landing;
