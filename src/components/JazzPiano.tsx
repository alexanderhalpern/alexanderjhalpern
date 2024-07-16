"use client";
import React, { useRef, useEffect } from "react";
import YouTube from "react-youtube";

const JazzPiano = ({ setYoutubeEvent }) => {
  return (
    <section className="py-20 px-4 text-white">
      <div className="flex flex-col justify-center items-center mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-center text-black">
          Jazz Piano
        </h2>
        <p className="mb-8 text-center text-black mx-12">
          I hope you enjoy my rendition of "Midnight Mood." <br /> I am very
          fortunate to say that this recording led to my being named a National
          YoungArts Winner for Jazz Piano.
        </p>
        <YouTube
          onReady={(e: any) => {
            setYoutubeEvent(e);
          }}
          videoId={"nzdWaCu8NuY"}
          opts={{
            width: "720",
            height: "405",
            playerVars: {
              autoplay: 0,
              controls: 1,
              modestbranding: 1,
              showinfo: 1,
              rel: 0,
              loop: 1,
              playlist: "nzdWaCu8NuY",
            },
          }}
        />
      </div>
    </section>
  );
};

export default JazzPiano;
