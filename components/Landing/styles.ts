import styled from "styled-components";

export const Container = styled.section`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(19, 21, 36, 0.3) 0%,
      #131524 100%
    ),
    url("/images/fireplace.jpeg");
  background-size: cover;
`;

export const Header = styled.header`
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 20px;
  line-height: 23px;

  button {
    margin-left: auto;
  }
`;
export const Logo = styled.div`
  margin-right: 42px;
`;

interface Props {
  total: number;
}
export const Sections = styled.div<Props>`
  display: flex;
  flex-direction: row;

  a {
    margin-right: 32px;
    z-index: 1;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px - 32px);
  justify-content: center;
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: row;

  small {
    font-size: 110%;
  }
`;

export const Title = styled.div`
  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 144px;
  line-height: 120px;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const Subtitle = styled.div`
  margin-top: 16px;
  margin-bottom: 40px;

  width: 522px;
  font-family: "SF Pro Display";
  font-size: 18px;
  line-height: 29px;
`;

export const Stores = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-right: 8px;
  }
`;

export const Left = styled.div``;

export const Right = styled.div`
  filter: drop-shadow(5px 21px 46px rgba(0, 0, 0, 0.7));
  transform: rotate(-72.14deg) scale(1.5);
  scale: 1.2;
`;
