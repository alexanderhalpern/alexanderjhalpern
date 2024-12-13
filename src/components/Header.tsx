"use client";
import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown, Play, Pause, FileUser } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const getWeightedRandomPosition = () => {
  const generateWeightedRandom = () => {
    const rand = Math.random();
    if (rand < 0.4) return rand * 0.3;
    if (rand > 0.6) return 0.7 + (rand - 0.6) * 0.75;
    return 0.3 + (rand - 0.4) * 1.33;
  };

  return {
    top: `${generateWeightedRandom() * 100}%`,
    left: `${generateWeightedRandom() * 100}%`,
  };
};

const FloatingEmoji = ({
  emoji,
  delay,
  position,
}: {
  emoji: string;
  delay: number;
  position: { top: string; left: string };
}) => (
  <div
    className="absolute text-4xl opacity-20"
    style={{
      animation: `float 20s ease-in-out infinite ${delay}s, sideFloat 15s ease-in-out infinite ${delay}s`,
      top: position.top,
      left: position.left,
    }}
  >
    {emoji}
  </div>
);

const FlyingMusicNote = ({
  delay,
  position,
}: {
  delay: number;
  position: { top: string; left: string };
}) => {
  const musicNotes = ["🎵", "🎶", "♪", "♫", "♬", "🎼"];
  const randomNote = musicNotes[Math.floor(Math.random() * musicNotes.length)];

  return (
    <div
      className="absolute text-2xl opacity-40"
      style={{
        animation: `flyingNote 10s linear infinite ${delay}s, fadeInOut 10s ease-in-out infinite ${delay}s`,
        top: position.top,
        left: position.left,
      }}
    >
      {randomNote}
    </div>
  );
};

const BurstEmoji = ({ emoji, angle }: { emoji: string; angle: number }) => {
  const distance = 100 + Math.random() * 100; // Random distance between 100 and 200 pixels
  const x = distance * Math.cos(angle);
  const y = distance * Math.sin(angle);

  return (
    <div
      className="absolute text-2xl"
      style={{
        animation: `burstOut 0.5s forwards, fadeOut 5s forwards`,
        transformOrigin: "center",
        // @ts-ignore
        "--x": `${x}px`,
        // @ts-ignore
        "--y": `${y}px`,
      }}
    >
      {emoji}
    </div>
  );
};

const Header = ({
  youtubeEvent,
  onScrollClick,
}: {
  youtubeEvent: any;
  onScrollClick: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const emojiPositionsRef = useRef<{ top: string; left: string }[]>([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Generate positions for emojis and store them in the ref
    if (emojiPositionsRef.current.length === 0) {
      const positions = [];
      for (let i = 0; i < 10; i++) {
        positions.push(getWeightedRandomPosition());
      }
      emojiPositionsRef.current = positions;
    }
  }, []);

  const togglePlay = () => {
    if (youtubeEvent) {
      var playerRef = youtubeEvent.target;
      if (isPlaying) {
        playerRef.pauseVideo();
      } else {
        playerRef.playVideo();
        setShowBurst(true);
        setTimeout(() => setShowBurst(false), 5000); // Hide burst after 1 second
      }
      setIsPlaying(!isPlaying);
    }
  };

  const burstEmojis = ["🎵", "🎶", "♪", "♫", "♬", "🎼", "🎹", "🎷", "🎺", "🎸"];
  const repeatedEmojis = Array.from({ length: 5 }, () => burstEmojis).flat();

  return (
    <header className="relative flex flex-col bg-gradient-to-br from-slate-800 to-blue-400 h-screen overflow-hidden">
      {/* Floating Emojis */}
      {emojiPositionsRef.current.slice(0, 5).map((position, i) => (
        <FloatingEmoji
          key={`piano-${i}`}
          emoji="🎹"
          delay={i * 2}
          position={position}
        />
      ))}
      {emojiPositionsRef.current.slice(5, 10).map((position, i) => (
        <FloatingEmoji
          key={`computer-${i}`}
          emoji="💻"
          delay={i * 2 + 1}
          position={position}
        />
      ))}

      {/* Flying Music Notes */}
      {isPlaying &&
        [...Array(20)].map((_, i) => (
          <FlyingMusicNote
            key={`note-${i}`}
            delay={i * 0.5}
            position={getWeightedRandomPosition()}
          />
        ))}

      <div
        className={`container mx-auto flex flex-col md:flex-row items-center justify-between flex-grow transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-right md:w-1/2 mb-8 md:mb-0 pr-16 pl-16 my-20">
          <h1 className="text-6xl font-bold mb-4 text-white animate-fadeIn">
            Alexander <br /> Halpern
          </h1>
          <div className="text-2xl mb-6 text-gray-200 h-8">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Innovator",
                2000,
                "Jazz Pianist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
         
          <div className="flex flex-wrap justify-end space-x-4 items-center">
            <a
              target="_blank"
              href="https://github.com/alexanderhalpern"
              className="text-white hover:text-gray-300 text-xl transition-transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/alexanderhalpern"
              className="text-white hover:text-gray-300 text-xl transition-transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              target="_blank"
              href="mailto:halperna22@gmail.com"
              className="text-white hover:text-gray-300 text-xl transition-transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              target="_blank"
              href="/pdfs/Alexander_Halpern_resume.pdf"
              className="text-white hover:text-gray-300 text-xl transition-transform hover:scale-110"
            >
              <FileUser size={24} />
            </a>
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={togglePlay}
                className={`my-4 animate-pulse duration-500 bg-white text-blue-600 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200`}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                <span className="animate-fadeIn duration-2000">
                  Hear me play some Jazz
                </span>
              </button>
              {showBurst && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {repeatedEmojis.map((emoji, index) => (
                    <BurstEmoji
                      key={index}
                      emoji={emoji}
                      angle={(index / repeatedEmojis.length) * 2 * Math.PI}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="flex justify-start md:w-1/2 my-auto m-6"
          style={{ zIndex: 1 }}
        >
          <img
            src="/images/profile.jpg"
            alt="Alexander Halpern"
            className="rounded-full md:w-96 md:h-96 md:mb-0 w-72 h-72 mb-16 object-cover shadow-2xl duration-500 animate-fadeInRotate"
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="animate-bounce cursor-pointer" onClick={onScrollClick}>
          <ChevronDown size={48} className="text-white" />
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInRotate {
          from {
            opacity: 0;
            transform: rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: rotate(0deg);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-fadeInRotate {
          animation: fadeInRotate 1s ease-out;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-50px);
          }
        }
        @keyframes sideFloat {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(30px);
          }
        }
        @keyframes flyingNote {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, -100px) rotate(90deg);
          }
          50% {
            transform: translate(200px, 0) rotate(180deg);
          }
          75% {
            transform: translate(100px, 100px) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes burstOut {
          from {
            transform: translate(-50%, -50%);
          }
          to {
            transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50%));
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
