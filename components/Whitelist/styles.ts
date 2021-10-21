import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  border-top: 4px solid;
  border-bottom: 4px solid;
  border-image-source: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  border-image-slice: 1;
`;

export const Title = styled.div`
  font-family: "Bebas Neue Pro";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  margin-top: -90px;
  padding-bottom: 64px;

  flex: none;
  flex-grow: 0;
  margin: 0px 8px;

  b {
    order: 1;
    background-image: linear-gradient(96.82deg, #cb61e4 0%, #be42d7 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const Box = styled.div`
  align-self: center;
  margin-bottom: 90px;

  width: 706px;
  height: 301px;

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const BoxContent = styled.div`
  margin-left: 8px;
  margin-top: 8px;

  padding-bottom: 35px;

  width: 690px;

  background: #202133;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 40px;
  }
`;

export const Subtitle = styled.div`
  padding-top: 35px;

  font-family: "Bebas Neue Pro";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 36px;

  text-align: center;

  flex: none;
  flex-grow: 0;
  margin: 4px 0px;

  b {
    background-image: linear-gradient(96.82deg, #0882f2 0%, #1fc6ec 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const Text = styled.div`
  position: static;
  width: 351px;

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;

  text-align: center;

  flex: none;
  flex-grow: 0;
  margin-top: 16px;
`;

export const Mouse1 = styled.div`
  position: relative;
  width: 258.21px;
  height: 333.3px;
  top: -300px;
  left: -100px;

  filter: drop-shadow(0px 0px 26.2316px rgba(0, 0, 0, 0.5));
  transform: matrix(-1, 0, 0, 1, 0, 0) scale(0.9);
`;

export const Mouse2 = styled.div`
  position: relative;
  width: 258.21px;
  height: 333.3px;
  top: -660px;
  right: -550px;

  filter: drop-shadow(0px 0px 23.1455px rgba(0, 0, 0, 0.5));
  transform: scale(0.9);
`;

export const Ellipse1 = styled.div`
  position: relative;
  width: 166.94px;
  height: 46.82px;
  left: -20px;
  top: -340px;

  background: rgba(0, 0, 0, 0.7);
  filter: blur(33.1753px);
  transform: rotate(-28.27deg);
`;

export const Ellipse2 = styled.div`
  position: relative;
  width: 166.94px;
  height: 46.82px;
  right: -580px;
  top: -700px;

  background: rgba(0, 0, 0, 0.7);
  filter: blur(33.1753px);
  transform: rotate(-28.27deg);
`;
