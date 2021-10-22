import styled from "styled-components";

export const Container = styled.section`
  margin-top: calc(80px - 518.86px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    width: 808px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 64px;
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
    background-image: linear-gradient(96.82deg, #0882f2 0%, #1fc6ec 100%);

    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const Members = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;

  a {
    z-index: 1;
    margin-right: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 96px;

  h1 {
    font-family: "Bebas Neue Pro";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 27px;

    margin-bottom: 0px;
  }
  h3 {
    margin-top: 4px;

    background-image: linear-gradient(96.82deg, #0882f2 0%, #1fc6ec 100%);

    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    font-family: "Bebas Neue Pro Bold";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 21px;
  }
  span {
    width: 255px;
    height: 120px;

    white-space: pre-line;
    align-self: center;

    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Photo = styled.div`
  width: 180px;
  height: 180px;

  background: #ffffff;
  border-radius: 128px;

  border: 6px solid;

  border-image-source: linear-gradient(96.82deg, #f2089f 0%, #1fc6ec 100%);

  background-image: linear-gradient(white, white),
    linear-gradient(to right, #f2089f 0%, #1fc6ec 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;

  img {
    border-top-left-radius: 50% 50%;
    border-top-right-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
    border-bottom-left-radius: 50% 50%;

    filter: grayscale(1);
  }
  align-self: center;
`;
