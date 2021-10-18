import type { NextPage } from 'next'
import Head from 'next/head'

import {Container, Footer, Hero} from '../styles/PrivateSale'
import Image from 'next/image'
import { useEffect } from 'react'

function countdown() {
  const second = 1000;
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const final = new Date(1635638399000)

  const countDown = new Date(final).getTime()

  const now = new Date().getTime()
  const distance = countDown - now;

  document.getElementById("days") !.innerText = Math.floor(distance / (day)).toString()
  document.getElementById("hours") !.innerText = Math.floor((distance % (day)) / (hour)).toString()
  document.getElementById("minutes") !.innerText = Math.floor((distance % (hour)) / (minute)).toString()
  document.getElementById("seconds") !.innerText = Math.floor((distance % (minute)) / second).toString()
}

const PrivateSale: NextPage = () => {
  useEffect(() => {
    setInterval(() => {
      countdown()
    }, 1000)
  }, [])

  return (
    <Container>
      <Head>
        <title>Mouse Haunt — Private Sale</title>
      </Head>
      <Hero id="hero" className="first">
        <div className="top">
          <div className="mouse">MOUSE</div>
          <div className="haunt">HAUNT</div>
        </div>
        <div>
          <button>
            JOIN THE PRIVATE SALE
          </button>
          <div>
            1 MHT = 0.02 USD
          </div>
        </div>
      </Hero>
      <Image layout='fill' alt="Coffins" src="/images/Coffins.jpg"/>
      <Footer>
        <div>
          <ul>
            <li><span id="days"></span>DAYS</li>
            <li><span id="hours"></span>HOURS</li>
            <li><span id="minutes"></span>MINUTES</li>
            <li><span id="seconds"></span>SECONDS</li>
          </ul>
        </div>
      </Footer>
    </Container>
  )
}

export default PrivateSale
