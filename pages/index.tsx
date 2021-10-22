import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { Container, Content } from "../styles/Home";
import Landing from "../components/Landing";
import Welcome from "../components/Welcome";
import MouseHeroes from "../components/MouseHeroes";
import GhostHeroes from "../components/GhostHeroes";
import Whitelist from "../components/Whitelist";
import InviteFriends from "../components/InviteFriends";
import InnovativeGameplay from "../components/InnovativeGameplay";
import Bosses from "../components/Bosses";
import MHT from "../components/MHT";
import Team from "../components/Team";
import Footer from "../components/Footer";
import { Ruler } from "../components/Ruler";

const HideMobile = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
      </Head>

      <Content>
        <Landing />
        <Welcome />
        <MouseHeroes />
        <GhostHeroes />
        <HideMobile>
          <Ruler />
          <Whitelist />
          <Ruler />
          <InviteFriends />
          <InnovativeGameplay />
          <Bosses />
          <MHT />
          <Team />
          <Footer />
        </HideMobile>
      </Content>
    </Container>
  );
};

export default Home;
