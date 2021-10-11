import styled from 'styled-components'

export const Container = styled.section`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  video {
    width: 100vw;
    height: 100%;
    object-fit: cover;

    @media only screen and (max-width: 600px) {
      height: auto;
      width: 100%;
    }
  }
  
`
