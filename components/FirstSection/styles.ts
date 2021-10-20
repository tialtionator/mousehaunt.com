import styled from "styled-components";

export const Container = styled.section`
  margin-left: 120px;
  margin-right: 120px;
`;

export const Header = styled.header`
  margin-top: 32px;
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
