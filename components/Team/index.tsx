import type { NextPage } from "next";

import { Container, Title, Members, Member, Photo, Social } from "./styles";
import Image from "next/image";

const Bosses: NextPage = () => {
  const members = [
    {
      name: "Pedro Camacho",
      role: "Co-Founder & CEO",
      description:
        "Pedro started his career at Bandai Namco, working on titles like Street Fighter Mobile. Later, onto AAA gaming, he helped develop Halo Infinite and Gears of Wars 4 ",
      src: "/images/pedro.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/luis-matamoros-1a854715a/",
      },
    },
    {
      name: "Matheus Vilano",
      role: "Co-Founder & Head of Production",
      description: "",
      src: "/images/matheus.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/matheusvilano/",
      },
    },
    {
      name: "Luis Matamoros",
      role: "3D Artist",
      description: "",
      src: "/images/pedro.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/luis-matamoros-1a854715a/",
      },
    },
  ];
  const advisors = [
    {
      name: "Andres Bilbao",
      description:
        "Co-founder of Rappi\nAfter creating of the first Unicorns in LATAM, Andres is full time dedicated to crypto",
      src: "/images/andres.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/luis-matamoros-1a854715a/",
      },
    },
    {
      name: "Caio Jahara",
      description: "Augmented reality pioneer\nFounder & CEO of R2U.io",
      src: "/images/caio.jpeg",

      social: {
        linkedin: "https://www.linkedin.com/in/aviggiano/",
      },
    },
    {
      name: "Antonio Viggiano",
      description:
        "Bitcoin enthusiast since 2013\nFounded and coded 2 crypto exchanges himself",
      src: "/images/antonio.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/aviggiano/",
        twitter: "https://twitter.com/agfviggiano",
      },
    },
    {
      name: "Gustavo",
      description:
        "+8 years experience in accounting and finance, also a crypto enthusiast that work as advisor in other P2E projects ",
      src: "/images/pedro.jpeg",
      social: {
        linkedin:
          "https://www.linkedin.com/in/gustavo-sabino-975145114/ https://twitter.com/GuhS_NFT",
      },
    },
  ];
  return (
    <>
      <Container>
        <Title>
          Our <b>TEAM</b>
        </Title>
        <Members>
          {members.map((member) => (
            <Member key={member.name}>
              <Photo>
                <Image
                  src={member.src}
                  width="180px"
                  height="180px"
                  alt={member.name}
                />
              </Photo>
              <h1>{member.name}</h1>
              <h3>{member.role}</h3>
              <span>{member.description}</span>
              <Social>
                {Object.keys(member.social).map((network) => (
                  <a
                    key={network}
                    href={(member.social as any)[network]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={`/images/${network}.png`}
                      width="24px"
                      height="24px"
                      alt={member.name}
                    />
                  </a>
                ))}
              </Social>
            </Member>
          ))}
        </Members>

        <Title>Advisors</Title>
        <Members>
          {advisors.map((advisor) => (
            <Member key={advisor.name}>
              <Photo>
                <Image
                  src={advisor.src}
                  width="180px"
                  height="180px"
                  alt={advisor.name}
                />
              </Photo>
              <h1>{advisor.name}</h1>
              <span>{advisor.description}</span>
              <Social>
                {Object.keys(advisor.social).map((network) => (
                  <a
                    key={network}
                    href={(advisor.social as any)[network]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={`/images/${network}.png`}
                      width="24px"
                      height="24px"
                      alt={advisor.name}
                    />
                  </a>
                ))}
              </Social>
            </Member>
          ))}
        </Members>
      </Container>
    </>
  );
};

export default Bosses;
