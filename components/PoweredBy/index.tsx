import type { NextPage } from "next";

import { Container, Content, Title, Logos } from "./styles";
import Image from "next/image";

const PoweredBy: NextPage = () => {
  return (
    <>
      <Container>
        <Content>
          <div>
            <Title>Powered By</Title>
            <Logos>
              <Image
                src="/images/binance.png"
                width="180px"
                height="51px"
                alt="Binance"
              />
              <Image
                src="/images/unreal.png"
                width="155px"
                height="135px"
                alt="Unreal"
              />
              <Image
                src="/images/aws.png"
                width="161px"
                height="70px"
                alt="AWS"
              />
            </Logos>
          </div>
          <div>
            <Title>Developer</Title>
            <Logos>
              <Image
                src="/images/isoforce.png"
                width="143.58px"
                height="122px"
                alt="Isoforce Games"
              />
            </Logos>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default PoweredBy;
