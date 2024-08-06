import React from "react";

export default function Home() {
  return (
    <>
      <div className="home flex justify-between px-12 grow">
        <div className="text-container basis-2/3 flex flex-col justify-center">
          <div className="heading-container mb-8">
            <h1 className="text-4xl mb-2">Hi there!</h1>
            <h1 className="text-6xl">
              I'm <span className="text-my-red">ANURAG SEMWAL</span>
            </h1>
          </div>
          <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cupiditate animi tempore neque ratione maiores. Odit, quisquam quam cumque ipsa, ipsam alias totam labore repellat adipisci, molestiae neque a vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore quo eos nemo. Modi, eligendi commodi. In perferendis aliquid minima. Incidunt repudiandae assumenda necessitatibus itaque soluta, aliquid consequatur fugiat natus?</p>
        </div>
        <div className="image-container basis-1/3 flex justify-center items-center">
          <img src="public/8208140.webp" alt="image" />
        </div>
      </div>
    </>
  );
}
