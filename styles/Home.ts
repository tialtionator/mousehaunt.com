import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  padding-left: 120px;
  padding-right: 120px;

  @media only screen and (max-width: 600px) {
    padding-left: unset;
    padding-right: unset;
  }
`;
