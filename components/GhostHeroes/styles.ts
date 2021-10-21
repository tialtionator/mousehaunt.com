import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 478px;
`;

export const Right = styled.div``;

export const Ghost = styled.div`
  transform: rotate(4.44deg) scale(0.8);
`;
export const Ghost2 = styled.div`
  transform: rotate(-1.14deg) scale(0.4);
  opacity: 39%;
  margin-top: -380px;
  margin-left: -280px;
`;

export const Ghost3 = styled.div`
  transform: matrix(-1, -0.01, -0.01, 1, 0, 0) scale(0.5);
  opacity: 39%;
  position: absolute;
  margin-top: -380px;
  margin-left: 240px;
`;

export const Phone = styled.div`
  filter: drop-shadow(0px 0px 25.3695px rgba(0, 0, 0, 0.5));
  transform: rotate(-80.31deg) scale(1.5);
  margin-top: -300px;
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
  position: absolute;
  width: 483px;
  height: 483px;
  left: 48px;
  top: 2500px;

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);
`;
