import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import city from "../assets/city.jpeg";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleClick = () => {
    console.log("click");
    setIsImageOpen(true);
    setIsCardOpen(false);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen flex items-center justify-center bg-gray-900">
          {isCardOpen && (
            <card className="bg-white rounded-lg w-[500px] h-[600px] flex items-center justify-evenly flex-col">
              <h1>
                <span>Shared</span> by you
              </h1>
              <Image
                alt="Picture of the author"
                width={350}
                height={270}
                src={city}
              ></Image>
              <div>
                <h2 className="text-center">Lost in Tokyo</h2>
                <p className="text-center">
                  Tingling of the spine Apollonius of Perga cosmos Drake
                  Equation concept of the number one brain is the seed of
                  intelligence.
                </p>
                <button onClick={handleClick}>Expand</button>
              </div>
            </card>
          )}

          {isImageOpen && (
            <card className="bg-white rounded-lg w-[500px] h-[600px] flex items-center justify-evenly flex-col">
              <h1>
                <span>Shared</span> by you
              </h1>
              <Image
                alt="Picture of the author"
                width={500}
                height={270}
                src={city}
              ></Image>
            </card>
          )}
        </div>
      </main>
    </>
  );
}
