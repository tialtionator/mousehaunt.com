import type { NextPage } from "next";
import Head from "next/head";

import { Container, Footer, Hero } from "../styles/PrivateSale";
import Image from "next/image";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

import config from "../utils/config";
import MHTPrivateSaleJson from "../contracts/MHTPrivateSale.sol/MHTPrivateSale.json";
import { MHTPrivateSale } from "../typechain/MHTPrivateSale";

function countdown() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const final = new Date(1635638399000);

  const countDown = new Date(final).getTime();

  const now = new Date().getTime();
  const distance = countDown - now;

  if (distance < 0) return;

  document.getElementById("days")!.innerText = Math.floor(
    distance / day
  ).toString();
  document.getElementById("hours")!.innerText = Math.floor(
    (distance % day) / hour
  ).toString();
  document.getElementById("minutes")!.innerText = Math.floor(
    (distance % hour) / minute
  ).toString();
  document.getElementById("seconds")!.innerText = Math.floor(
    (distance % minute) / second
  ).toString();
}

const PrivateSale: NextPage = () => {
  const [contract, setContract] = useState<MHTPrivateSale>();
  const [wallet, setWallet] = useState<string>();
  const bnb = 0.0000424;
  const tokens = 100;
  const value = tokens * bnb;

  useEffect(() => {
    setInterval(() => {
      countdown();
    }, 1000);
  }, []);

  useEffect(() => {
    if (typeof (window as any).ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const signer = provider.getSigner(0);
      const contract = new ethers.Contract(
        config.testnet.MHTPrivateSale.address,
        MHTPrivateSaleJson.abi,
        signer
      ) as MHTPrivateSale;
      signer.getAddress().then(setWallet);
      setContract(contract);
    }
  }, []);

  const onClick = () => {
    if (contract && wallet) {
      contract?.buyTokens(wallet, {
        value: ethers.utils.parseEther(value.toString()),
      });
    }
  };

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
          <button onClick={onClick} type="button">
            BUY {tokens} MHT
          </button>
          <div className="tokens">
            <div>
              <span>
                <b>1 MHT = {bnb} BNB</b>
              </span>
            </div>
            <div>
              <span>2,000,000 tokens for sale</span>
            </div>
          </div>
        </div>
      </Hero>
      <Image layout="fill" alt="Coffins" src="/images/Coffins.jpg" />
      <Footer>
        <div>
          <ul>
            <li>
              <span id="days"></span>DAYS
            </li>
            <li>
              <span id="hours"></span>HOURS
            </li>
            <li>
              <span id="minutes"></span>MINUTES
            </li>
            <li>
              <span id="seconds"></span>SECONDS
            </li>
          </ul>
        </div>
      </Footer>
    </Container>
  );
};

export default PrivateSale;
