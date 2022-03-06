import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import city from "../assets/kuala-lumpur.jpg";
import comment from "../assets/comment.png";

export default function Home() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(true);

  const [imageContainerClassText, setImageContainerClassText] =
    useState("image-container");

  const handleClickOpen = () => {
    console.log("click");
    setImageContainerClassText("image-container-resized");
    setIsImageOpen(true);
    setIsCardOpen(false);
  };

  const handleClickClose = () => {
    console.log("click");
    setImageContainerClassText("image-container");
    setIsImageOpen(false);
    setIsCardOpen(true);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="container">
        <div>
          <card className="card">
            {isCardOpen && (
              <h1 className="mb-10">
                Shared <span>by you</span>
              </h1>
            )}
            <div className={imageContainerClassText}>
              <Image
                className={"image"}
                alt="Picture of the author"
                src={city}
                layout="fill"
              />
            </div>
            {isCardOpen && (
              <>
                <h2 className="text-center font-Rubik text-4xl font-semibold mb-5 mt-5">
                  Lost in Tokyo
                </h2>
                <p className="p-4 text-center">
                  Tingling of the Perga cosmos Drake Equation concept of the
                  number one brain is the seed of intelligence.
                </p>
                <button
                  className="text-center bg-black rounded-full p-3"
                  onClick={handleClickOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </button>
              </>
            )}
            {isImageOpen && (
              <div>
                <button className="close" onClick={handleClickClose} />
                <div className="text-on-image bounce">
                  <h1 className="text-on-image-header">Lost in Tokyo</h1>
                  <p>by Johan</p>
                </div>
                <div className="comment-container">
                  <p className="number-of-comments">8</p>
                  <Image height={30} width={30} src={comment}></Image>
                </div>
              </div>
            )}
          </card>
        </div>
      </main>
    </>
  );
}
