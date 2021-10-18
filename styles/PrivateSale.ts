import styled from 'styled-components'


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    @media only screen and (max-width: 600px) {
      top: 0;
    }
  }
  
`

export const Hero = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  @media only screen and (max-width: 600px) {
  }

  .top {
    font-family: 'Bebas Neue';
    font-size: 180px;
    font-weight: 700;
    line-height: 0.8;
    margin-top: 40px;

    @media only screen and (max-width: 600px) {
      font-size: 140px;
    }

    .mouse {
      color: white;
    }
    .haunt {
      color: #92E2EB;
    }
  }

  button {
    margin-top: 20px;
    margin-bottom: 20px;

    width: 200px;
    background: none;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;


    background-color: #92E2EB;
    color: white;
    border: 1px;
    padding: 10px;
    border-radius: 5px;
    font-family: 'Bebas Neue';
    font-size: 24px;
  }


`

export const Footer = styled.div`
  color: white;
  position: fixed;
  bottom: 10px;
  z-index: 1;
  font-size: 30px;

  li {
    display: inline-block;
    font-size: 1em;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
  }

  li span {
    display: block;
    font-size: 4.5rem;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`