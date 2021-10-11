import styled from 'styled-components'

export const Container = styled.section`
  color: white;

  .left {
    position: absolute;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-left: 60px;

    text-align: justify;
    text-justify: inter-word;

    .top {
      font-family: 'Bebas Neue';
      font-size: 180px;
      font-weight: 700;
      line-height: 0.8;

      .mouse {
      }
      .haunt {
        color: #92E2EB;
      }

      img {
        height:100vh;
      }
    }

    .bottom {
      margin-left: 12.25px;
    }
    
    .authenticate {
      margin-top: 12.25px;
    }
  }

  .image {
    height: 100vh;
    width: auto;
  }
`
