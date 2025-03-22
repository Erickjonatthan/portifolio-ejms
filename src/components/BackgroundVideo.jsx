import React, { useState, useEffect } from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import backgroundVideo from "../assets/fundo-video.mp4";
import backgroundImage from "../assets/fundo-imagem.png"; // Substitua pelo nome do seu arquivo de imagem

export default function BackgroundVideo() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("background-video");
    videoElement.onloadeddata = () => {
      setIsVideoLoaded(true);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {!isVideoLoaded && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <video
        id="background-video"
        className={`absolute top-0 left-0 w-full h-full object-cover ${isVideoLoaded ? 'block' : 'hidden'}`}
        src={backgroundVideo}
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
      />
      <div className="relative z-10 w-full h-full flex flex-col">
        <Header />
        <Welcome />
      </div>
    </div>
  );
}