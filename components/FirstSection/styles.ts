import styled from 'styled-components'

export const Header = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  color: white;

  a:hover {
    color: #92E2EB;
    font-weight: 700;
  }

  .left {
  }

  .right {
    width: 400px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    /* 
    if we did this instead of the template it would be a problem:
    grid-auto-flow: column;
    */
    text-align: center;
    padding: 2rem 1rem;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  
`

export const Hero = styled.section`
  width: 400px;
  z-index: 99;
  position: fixed;
  color: white;

  left: calc(100% /6);

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
  }

  .bottom {
    margin-left: 22.5px;
    margin-right: 22.5px;

    text-align: justify;
    text-justify: inter-word;

    .stores {
      margin-top: 22.5px;

      span {
        margin-right: 10px;
      }
    }
  }
`