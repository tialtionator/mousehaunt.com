import styled from "styled-components";

export const Container = styled.section`
  padding-top: 160px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Left = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 478px;

  position: relative;
  padding-left: 92px;

  button {
    width: 156px;
  }
`;

export const Chest = styled.div`
  position: relative;
`;

export const Title = styled.div`
  font-family: "Bebas Neue Pro";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
`;

export const Subtitle = styled.div`
  padding-top: 16px;
  padding-bottom: 40px;

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  flex: none;
  flex-grow: 0;
  margin: 16px 0px;
`;

export const Ellipse = styled.div`
  position: relative;

  width: 518.86px;
  height: 518.86px;

  left: calc(100px + 518px);
  top: calc(100px - 518px);

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);
`;
