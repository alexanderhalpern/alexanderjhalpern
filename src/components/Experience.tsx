import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Versatile Credit",
    period: "June 2024 - Present",
    description:
      "Utilizing Python and PostgreSQL for machine learning models in payment pipeline anomaly detection.",
    logo: "/images/logos/versatile-credit.png",
  },
  {
    title: "Accelerate Program Member",
    company: "IBM",
    period: "June 2024 - Present",
    description:
      "Selected as one of the top 5% participants for the Software Development Track.",
    logo: "/images/logos/ibm.png",
  },
  {
    title: "Lead / President",
    company: "Google Developer Student Clubs at UVA",
    period: "August 2023 - Present",
    description:
      "Restarted the club, recruited over 250 members, and organize events for 100+ attendees.",
    logo: "/images/logos/gdsc-brackets.png",
  },
];

const Experience = () => (
  <section className="py-20 px-2 bg-blue-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Experience
      </h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 mr-4 relative flex-shrink-0">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">
                  {exp.title}
                </h3>
                <p className="text-gray-600">
                  {exp.company} | {exp.period}
                </p>
              </div>
            </div>
            <p className="text-gray-800">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
