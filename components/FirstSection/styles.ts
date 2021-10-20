import styled from "styled-components";

export const Container = styled.section`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  padding-left: 120px;
  padding-right: 120px;

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

  color: white;
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
  }
`;
