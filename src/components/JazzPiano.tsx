"use client";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Music, Award, Volume2 } from "lucide-react";
import { Knob } from "primereact/knob";

const JazzPiano = ({
  setYoutubeEvent,
}: {
  setYoutubeEvent: React.Dispatch<any>;
}) => {
  const [activeTrack, setActiveTrack] = useState<number | null>(0);
  const [volume, setVolume] = useState(100);
  const [channelKnob, setChannelKnob] = useState(1);

  const [player, setPlayer] = useState<any>(null);

  const tracks = [
    { channel: 1, title: "Midnight Mood", id: "nzdWaCu8NuY" },
    { channel: 3, title: "Tempus Fugit", id: "IOlbKxTDqFM" },
    { channel: 4, title: "Soul Eyes", id: "UCkx1CaS5dY" },
    { channel: 7, title: "Chi Chi", id: "idfddV8_Tkg" },
  ];

  const staticChannelId = "J_FVFMdiZ0w";

  // if not one of those channels, play J_FVFMdiZ0w
  const changeChannel = (newValue: number) => {
    setChannelKnob(newValue);
    const selectedTrack = tracks.find((track) => track.channel === newValue);

    if (selectedTrack) {
      setActiveTrack(tracks.indexOf(selectedTrack));
    } else {
      // If the channel doesn't exist, set activeTrack to null to indicate static
      setActiveTrack(null);
    }
  };

  const getCurrentVideoId = () => {
    return activeTrack !== null ? tracks[activeTrack].id : staticChannelId;
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-center text-white">Alexander Halpern</h4>
        <h2 className="text-5xl font-bold mb-20 text-center text-white">
          <Music className="inline-block mr-2" />
          Jazz Piano
          <Music className="inline-block ml-2" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-20">
              <div className="w-1 h-20 bg-gray-600 absolute left-1/4 transform -translate-x-1/2 origin-bottom -rotate-12"></div>
              <div className="w-1 h-12 bg-gray-600 absolute right-1/4 transform translate-x-1/2 origin-bottom rotate-45"></div>
            </div>
            <div className="bg-gray-800 p-8 rounded-3xl shadow-xl relative overflow-hidden tv-frame">
              <YouTube
                onReady={(e: any) => {
                  setYoutubeEvent(e);
                  setPlayer(e.target);
                }}
                videoId={getCurrentVideoId()}
                opts={{
                  width: "100%",
                  height: "300",
                  playerVars: {
                    autoplay: 0,
                    controls: 1,
                    modestbranding: 1,
                    showinfo: 1,
                    rel: 0,
                    loop: 1,
                    playlist: getCurrentVideoId(),
                  },
                }}
                className="rounded-lg overflow-hidden"
              />
              <div className="flex justify-between mt-4 items-center">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Volume2 className="text-white mr-2" />
                    {/* <div
                    className="w-12 h-12 bg-gray-600 rounded-full cursor-pointer relative"
                    onClick={() => adjustVolume("up")}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      adjustVolume("down");
                    }}
                  >
                    <div
                      className="w-1 h-6 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ transform: `rotate(${volume * 3.6}deg)` }}
                    ></div>
                  </div> */}
                  </div>
                  <Knob
                    value={volume}
                    onChange={(e) => {
                      setVolume(e.value);
                      player.setVolume(e.value);
                    }}
                    min={0}
                    max={100}
                    step={10}
                    size={50}
                    valueColor="#fff"
                    rangeColor="#495568"
                    textColor="#1F2937"
                  />
                </div>

                <h2 className="text-white">JazzTube</h2>
                <div className="flex items-center">
                  <Knob
                    value={channelKnob}
                    onChange={(e) => changeChannel(e.value)}
                    min={1}
                    max={10}
                    step={1}
                    size={50}
                    valueColor="#fff"
                    rangeColor="#495568"
                    textColor="#FFFFFF"
                  />
                  <div className="relative">
                    <span className="absolute top-1/2 left-1/2">
                      {channelKnob}
                    </span>
                  </div>
                  <img
                    src="/svgs/television.svg"
                    alt="TV"
                    className="w-8 ml-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Available Channels
              </h3>

              {tracks.map((track, index) => (
                <div
                  key={index}
                  className={`p-3 my-2 rounded-lg cursor-pointer transition-colors ${
                    activeTrack === index
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  }`}
                  onClick={() => {
                    setActiveTrack(index);
                    setChannelKnob(track.channel);
                  }}
                >
                  CHANNEL {track.channel}: {track.title}
                </div>
              ))}
            </div>

            <div className="mt-6 bg-slate-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-white flex items-center">
                <Award className="mr-2" /> Achievements
              </h3>
              <p className="flex items-center text-slate-200">
                National
                <a
                  href="https://www.youngarts.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center mx-1 hover:underline"
                >
                  <img
                    src="/images/youngarts.webp"
                    alt="YoungArts"
                    className="h-8 mr-1 inline"
                    style={{ filter: "invert(1) brightness(2)" }}
                  />
                </a>
                Winner for Jazz Piano
              </p>
              <p className="flex items-center text-slate-200">
                Pianist for UVA Jazz Ensemble
              </p>
              <p className="flex items-center text-slate-200">
                Student in Manhattan School of Music's Precollege Jazz Program
              </p>
              <p className="flex items-center text-slate-200">
                Pianist in Jazz at Lincoln Center's Summer Jazz Academy
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl text-slate-300 italic">
            "Jazz is not just music, it's a way of life, it's a way of being, a
            way of thinking." - Nina Simone
          </p>
        </div>
      </div>
      <style jsx>{`
        .tv-frame {
          border: 20px solid #4a5568;
          border-radius: 20px;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .tv-frame::before {
          content: "";
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 10px solid #2d3748;
          border-radius: 30px;
          z-index: -1;
        }
      `}</style>
    </section>
  );
};

export default JazzPiano;
