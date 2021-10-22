import type { NextPage } from "next";

import { Container, Title, Members, Member, Photo, Social } from "./styles";
import Image from "next/image";

import { svg } from "../../utils/svg";

const Bosses: NextPage = () => {
  const members = [
    {
      name: "Pedro Camacho",
      role: "Co-Founder & CEO",
      description:
        "Pedro started his career at Bandai Namco, working on titles like Tekken and moved on to AAA gaming. Worked as a designer on titles such as Halo Infinite and Gears of Wars 5",
      src: "/images/pedro.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/pedrocamachodandrea/",
      },
    },
    {
      name: "Matheus Vilano",
      role: "Co-Founder & Head of Production",
      description:
        "Matheus started as a musician and audio experience designer. After years of project management and game development, he became a Game Dev Instructor and Mentor",
      src: "/images/matheus.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/matheusvilano/",
      },
    },
    {
      name: "Luis Matamoros",
      role: "3D Artist",
      description:
        "Luis Matamoros is a 3D artist and texturer that worked in Far Cry 6. An original creator of Mouse Haunt.",
      src: "/images/luis.png",
      social: {
        linkedin: "https://www.linkedin.com/in/luis-matamoros-1a854715a/",
      },
    },
    {
      name: "Juan Valencia",
      role: "Software Engineer",
      description:
        "Juan is a talented software engineer who worked in Magic the Gathering Arena. An original creator of Mouse Haunt",
      src: "/images/juan.png",
      social: {
        linkedin: "https://www.linkedin.com/in/juanvalenciagd/",
      },
    },
    {
      name: "Sinan Ozer",
      role: "Project Manager",
      description:
        "Sinan Ozer has a track record of working as Project management and as Graphic Designer. Has also worked at EA games. An original creator of Mouse Haunt",
      src: "/images/sinan.png",
      social: {
        linkedin: "https://www.linkedin.com/in/sinanozer7/",
      },
    },
    {
      name: "Petri Kauritsalo",
      role: "Level Designer",
      description:
        "Senior Level Designer also working in AAA gaming industry. An original creator of Mouse Haunt",
      src: "/images/petri.png",
      social: {
        linkedin: "https://www.linkedin.com/in/petri-kauritsalo/",
      },
    },
    {
      name: "Lan Tong",
      role: "2D Artist",
      description:
        "Lan Tong is a UI/2D artist working in the industry since 2014. He moved to Vancouver and is also an original creator of Mouse Haunt",
      src: "/images/lan.png",
      social: {
        artstation: "https://www.artstation.com/lantong",
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
        linkedin: "https://www.linkedin.com/in/caio-jahara-1b471680/",
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
      src: "",
      social: {
        linkedin:
          "https://www.linkedin.com/in/gustavo-sabino-975145114/ https://twitter.com/GuhS_NFT",
      },
    },
    {
      name: "Breno Mazza",
      description:
        "Community Manager, specialist in SEO, copywriting and advertising writing. Columnist for Blockchain Games",
      src: "/images/breno.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/breno-mazza-966823111/",
      },
    },
    {
      name: "Daniel Portugal",
      description:
        "Daniel is a Senior Solidity Engineer, doing Ethereum, solidity and multi-blockchain contracts since 2017",
      src: "/images/daniel.png",
      social: {
        linkedin: "https://www.linkedin.com/in/danielportugal/",
      },
    },
  ];
  return (
    <>
      <Container id="Team">
        <Title>
          Created <b>by</b>
        </Title>
        <Members>
          {members
            .filter((m) => m.src)
            .map((member) => (
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
                      {svg(network)}
                    </a>
                  ))}
                </Social>
              </Member>
            ))}
        </Members>

        <Title>Advisors</Title>
        <Members>
          {advisors
            .filter((a) => a.src)
            .map((advisor) => (
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
                      {svg(network)}
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
