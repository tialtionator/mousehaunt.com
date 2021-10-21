import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "../styles/Home";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Mouse Haunt</title>
      </Head>

      <div>
        <FirstSection />
        <SecondSection />
      </div>
    </Container>
  );
};

export default Home;
