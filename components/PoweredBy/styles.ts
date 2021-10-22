import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  &:before {
    content: "";
    background-image: url("/images/cheese.png");
    background-size: cover;
    opacity: 5%;
    width: 1200px;
    height: 421px;
    opacity: 5%;
    position: absolute;
  }
`;

export const Title = styled.div`
  margin-bottom: 70px;
  z-index: 1;

  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
  order: 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 80px;
  margin-bottom: 80px;
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
