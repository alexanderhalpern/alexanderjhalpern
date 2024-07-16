"use client";
import React, { useState, useEffect } from "react";
import Slideshow from "./Slideshow";
import { ExternalLink } from "lucide-react";

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
    slideshow: [
      "patchat.png",
      "search.png",
      "project-manager.png",
      "classifier.png",
    ],
    features: [
      "Advanced patent search using AI",
      "Custom vector embedding model",
      "Project management tools",
      "Patent classification system",
    ],
    borderColor: "black",
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
    thumbnail: "/images/logos/safeline.png",
    background: "#CB6DE6",
    textColor: "white",
    slideshow: [
      "home.png",

      "administrator-view.png",
      "first-screenshot.png",
      "second-screenshot.png",
    ], // Add actual image names
    features: [
      "A line of communication during time-critical situations",
      "Real-time incident reporting",
      "Precise location tracking",
      "Instantaneous alerting",
    ],
    borderColor: "white",
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
    thumbnail: "/images/logos/keyglow.png",
    background: "black",
    textColor: "white",
    slideshow: ["device.png", "screen.png"], // Add actual image names
    features: [
      "Patiently and politely instructs the user",
      "Auto-aligns light projection with any piano keyboard",
      "Powered by machine-learning assisted mistake detection",
    ],
    borderColor: "#FF96D5",
  },
];
const ProjectSection = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => (
  <div
    className={`w-full md:px-8 px-2 py-16 text-${project.textColor}`}
    style={{ backgroundColor: project.background }}
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {index % 2 === 0 ? (
          <>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-64 mb-6"
              />
              <div className={`mb-6 ${project.textColor}`}>
                {project.description.map((item: string, index: number) => (
                  <React.Fragment key={index}>{item}</React.Fragment>
                ))}
              </div>
              <ul className={`list-disc list-inside mb-6 ${project.textColor}`}>
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex no-underline items-center text-${project.textColor} font-semibold hover:underline`}
              >
                Explore Project <ExternalLink size={20} className="ml-2" />
              </a>
            </div>
            <div className="md:w-1/2 md:mx-8 w-full">
              <Slideshow
                className="rounded-lg shadow-xl"
                images={project.slideshow}
                name={project.name}
                borderColor={project.borderColor}
              />
            </div>
          </>
        ) : (
          <>
            <div className="md:w-1/2 md:mx-12 w-full">
              <Slideshow
                className="rounded-lg shadow-xl"
                images={project.slideshow}
                name={project.name}
                borderColor={project.borderColor}
              />
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-64 my-6"
              />
              <div className={`mb-6 ${project.textColor}`}>
                {project.description.map((item: string, index: number) => (
                  <React.Fragment key={index}>{item}</React.Fragment>
                ))}
              </div>
              <ul className={`list-disc list-inside mb-6 ${project.textColor}`}>
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex no-underline items-center text-${project.textColor} font-semibold hover:underline`}
              >
                Explore Project <ExternalLink size={20} className="ml-2" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section className="bg-white">
    <div className="flex py-20 bg-gradient-to-br from-blue-500 to-purple-600 justify-center items-center">
      <h2 className="text-5xl mx-auto text-center font-bold text-white z-10">
        Featured Projects
      </h2>
    </div>

    {projects.map((project, index) => (
      <ProjectSection key={index} project={project} index={index} />
    ))}
  </section>
);

export default Projects;
