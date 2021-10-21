import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "../styles/Home";
import Landing from "../components/Landing";
import Welcome from "../components/Welcome";
import MouseHeroes from "../components/MouseHeroes";
import GhostHeroes from "../components/GhostHeroes";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
      </Head>

      <div>
        <Landing />
        <Welcome />
        <MouseHeroes />
        <GhostHeroes />
      </div>
    </Container>
  );
};

export default Home;
