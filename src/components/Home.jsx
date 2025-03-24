import { useState } from "react";
import { Code, FileCode, Globe, Server } from "lucide-react";

function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const skills = {
    frontend: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 55 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 80 },
    ],
    backend: [
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "API Development", level: 60 },
      { name: "Node.js", level: 45 },
    ],
    other: [
      { name: "Git/GitHub", level: 75 },
      { name: "Responsive Design", level: 80 },
    ],
  };

  const filterSkills = (category) => {
    setActiveTab(category);
  };

  const getFilteredSkills = () => {
    if (activeTab === "all") {
      return [...skills.frontend, ...skills.backend, ...skills.other];
    }
    return skills[activeTab] || [];
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 py-10">
        <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="lg:text-3xl md:text-2xl text-[12px]  font-bold mb-2">
                Hi, 👋 I'm Ndungutse Eugide
              </h1>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
              <h2 className="font-bold text-gray-800 lg:text-3xl md:text-2xl text-[12px]  mb-1">
                I Build Custom
              </h2>
              <p className="font-bold text-blue-700 lg:text-3xl md:text-2xl text-[12px]  mb-1">
                Website Solutions
              </p>
              <p className="font-bold text-gray-800 lg:text-3xl md:text-2xl text-[12px]  mb-1">
                That Help Your
              </p>
              <p className="font-bold text-blue-700 lg:text-3xl md:text-2xl text-[12px]  mb-6">
                Business Grow
              </p>

              <div className="flex gap-4">
                <a
                  href="Footer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
                >
                  Contact Me
                </a>
                <button className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600  px-3 py-2 rounded-md">
                  View Projects
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img
                  className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full"
                  src="/image/eugide.jpg"
                  alt="Ndungutse Eugide - Software Developer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
          <div className="text-center mb-12">
            <h2 className="lg:text-3xl md:text-2xl text-[12px]  font-bold text-gray-800">
              My Skills
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I've worked with a variety of technologies and tools to create
              responsive and efficient web applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => filterSkills("all")}
              className={`px-5 py-2 rounded-full transition-all ${
                activeTab === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => filterSkills("frontend")}
              className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                activeTab === "frontend"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <Globe size={16} /> Frontend
            </button>
            <button
              onClick={() => filterSkills("backend")}
              className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                activeTab === "backend"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <Server size={16} /> Backend
            </button>
            <button
              onClick={() => filterSkills("other")}
              className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                activeTab === "other"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FileCode size={16} /> Other
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getFilteredSkills().map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-blue-600 font-medium">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Services I Offer
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-semibold">
              I provide end-to-end web development solutions to help businesses
              establish their online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-300 p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600 font-semibold">
                Custom websites built with modern technologies that are
                responsive, fast, and user-friendly.
              </p>
            </div>

            <div className="bg-gray-300 p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <p className="text-gray-800 font-semibold">
                I help you increase conversion and performance in every possible
              </p>
            </div>

            <div className="bg-gray-300 p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-gray-600 font-semibold">
                A specialized website that solves specific problems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
