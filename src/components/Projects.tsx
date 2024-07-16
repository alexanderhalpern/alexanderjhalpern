// components/Projects.js
import React from "react";

const projects = [
  {
    name: "Scoper",
    url: "https://beta.scoper.us",
    description: [
      "AI-assisted patent search tool for searching a self-hosted database of ",
      <strong key="1">150 million+</strong>,
      " patents using a custom vector embedding model fine-tuned on ",
      <strong key="2">100k+</strong>,
      " patents",
    ],
    thumbnail: "/svgs/scoper-full.svg",
    background: "white",
    textColor: "black",
  },
  {
    name: "Safeline",
    url: "https://www.yoursafeline.com",
    description: [
      "School safety incident reporting app featured on ",
      <strong key="3">NBC</strong>,
      ", ",
      <strong key="4">CBS</strong>,
      ", and ",
      <strong key="5">FOX</strong>,
      " news in Virginia",
    ],
    thumbnail: "/images/safeline.png",
    background: "#CB6DE6",
    textColor: "white",
  },
  {
    name: "KeyGlow",
    url: "https://devpost.com/software/pianoluminator-1000-pro-x",
    description: [
      "Virtual and visual piano tutor that uses a projector to display a glowing green light on each note. Players copy the virtual instructor to learn songs. ",
      <br />,
      <br />,
      <strong key="6">1st Place</strong>,
      " in our category at ",
      <strong key="7">UVA's Hackathon, HooHacks</strong>,
      ".",
    ],
    thumbnail: "/images/keyglow.png",
    background: "black",
    textColor: "white",
  },
];

const Projects = () => (
  <section className="py-20 px-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            target="_blank"
            key={index}
            href={project.url}
            className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            style={{ background: project.background }}
          >
            <div className="w-full flex justify-start">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-48 mb-4"
              />
            </div>
            <p className={`text-${project.textColor} mb-6`}>
              {project.description.map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
              ))}
            </p>
            <span className={`text-${project.textColor} font-semibold`}>
              Explore →
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
