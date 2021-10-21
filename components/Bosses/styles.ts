import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    width: 808px;
  }
`;

export const Title = styled.div`
  margin-top: -45px;
  z-index: 1;

  font-family: "Bebas Neue Pro";
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;

  flex: none;
  flex-grow: 0;
  order: 0;

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

export const Subtitle = styled.div`
  padding-top: 16px;
  padding-bottom: 85px;

  width: 784px;
  align-self: center;

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: center;
`;

export const Mice = styled.div`
  align-self: center;

  width: 334.28px;
  height: 239.62px;

  transform: rotate(-3.03deg);
`;

export const Video = styled.div`
  width: 816px;
  height: 438px;
  align-self: center;

  margin-top: calc(0px - 816px / 2 - 3 * 40px);

  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.5));
  transform: rotate(-90deg) scale(2);

  img {
    margin-left: -219px !important;
  }
`;

export const Ellipse1 = styled.div`
  position: relative;
  width: 375.04px;
  height: 37.33px;
  top: -40px;

  background: #0f0e23;
  filter: blur(15px);
`;

export const Ellipse2 = styled.div`
  position: relative;

  width: 468.85px;
  height: 468.85px;

  left: calc(468.86px * 1.25);
  top: calc(-468.86px * 0.5);

  background: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);
  mix-blend-mode: overlay;
  filter: blur(187px);
  transform: rotate(-124.29deg);
`;
