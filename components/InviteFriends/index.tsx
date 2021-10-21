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
import { Button } from "../Button";

const InviteFriends: NextPage = () => {
  const onClick = () => {
    const url = new URL("https://twitter.com/intent/tweet");
    const search = new URLSearchParams();
    search.set("original_referer", "mousehaunt.com");
    search.set("source", "tweetbutton");
    search.set(
      "text",
      "Check out Mouse Haunt! A new NFT game built on Unreal 5 🚀"
    );
    url.search = search.toString();
    window.open(url, "_blank");
  };
  return (
    <>
      <Container>
        <Left>
          <Phone>
            <Image
              src="/images/rats.png"
              width="512px"
              height="287px"
              alt="Hero"
            />
          </Phone>
          <Hero>
            <Image
              src="/images/rat-5.png"
              width="227px"
              height="264px"
              alt="Phone"
            />
          </Hero>
        </Left>
        <Right>
          <Title>Realtime Multiplayer</Title>
          <Subtitle>
            Showcase your unique NFTs and your kickass skills in our action
            packed online multiplayer. The better you are, the more rewards you
            get! Invite your friends and get rewards!
          </Subtitle>
          <Button onClick={onClick}>Invite friends</Button>
        </Right>
      </Container>
      <Ellipse />
    </>
  );
};

export default InviteFriends;
