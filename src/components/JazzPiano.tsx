"use client";
import React from "react";
import YouTube from "react-youtube";

const JazzPiano = ({
  setYoutubeEvent,
}: {
  setYoutubeEvent: React.Dispatch<any>;
}) => {
  return (
    <section className="relative bg-black py-20 px-4 min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-30"
        style={{ backgroundImage: "url('/images/jazz.jpg')" }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold bg-black p-3 rounded mb-3 text-center">
            Jazz Piano
          </h2>
          <p className="mb-8 bg-black rounded text-center mx-12 p-2">
            I hope you enjoy my rendition of "Midnight Mood."
          </p>
          <div className="bg-black bg-opacity-50 p-2 rounded-lg">
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
          <p className="mb-8 bg-black rounded text-center mx-12 p-2">
            I am fortunate to say that this recording led to my being named a
            National YoungArts Winner for Jazz Piano.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JazzPiano;
