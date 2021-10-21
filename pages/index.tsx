import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { Container } from "../styles/Home";
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

      <div>
        <Landing />
        <HideMobile>
          <Welcome />
          <MouseHeroes />
          <GhostHeroes />
          <Whitelist />
          <InviteFriends />
          <InnovativeGameplay />
          <Bosses />
          <MHT />
          <Team />
          <Footer />
        </HideMobile>
      </div>
    </Container>
  );
};

export default Home;
