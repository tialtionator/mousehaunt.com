import type { NextPage } from "next";
import Head from "next/head";

import { Container, Body } from "../styles/Home";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
      </Head>

      <Body>
        <FirstSection />
        {/* <SecondSection /> */}
        {/* <ThirdSection /> */}
      </Body>
    </Container>
  );
};

export default Home;
