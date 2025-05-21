// import { useState } from "react";
// import { Code, FileCode, Globe, Server } from "lucide-react";

// const skillIcons = {
//   "HTML/CSS": <Globe className="text-blue-600" size={18} />,
//   "JavaScript": <Code className="text-yellow-500" size={18} />,
//   "React": <FileCode className="text-blue-400" size={18} />,
//   "Tailwind CSS": <FileCode className="text-cyan-500" size={18} />,
//   "Responsive Design": <Globe className="text-green-500" size={18} />,
//   "Express": <Server className="text-gray-600" size={18} />,
//   "MongoDB": <Server className="text-green-600" size={18} />,
//   "API Development": <Code className="text-purple-500" size={18} />,
//   "Node.js": <Code className="text-green-600" size={18} />,
//   "Git/GitHub": <FileCode className="text-gray-700" size={18} />,
//   "Figma Design": <FileCode className="text-purple-600" size={18} />
// };

// function Home() {
//   const [activeTab, setActiveTab] = useState("all");

//   const skills = {
//     frontend: [
//       { name: "HTML/CSS", level: 80 },
//       { name: "JavaScript", level: 55 },
//       { name: "React", level: 65 },
//       { name: "Tailwind CSS", level: 75 },
//       { name: "Responsive Design", level: 78 },
//     ],
//     backend: [
//       { name: "Express", level: 75 },
//       { name: "MongoDB", level: 70 },
//       { name: "API Development", level: 60 },
//       { name: "Node.js", level: 60 },
//     ],
//     other: [
//       { name: "Git/GitHub", level: 75 },
//       { name: "Responsive Design", level: 80 },
//       { name: "Figma Design", level: 50 },
//     ],
//   };

//   const filterSkills = (category) => {
//     setActiveTab(category);
//   };

//   const getFilteredSkills = () => {
//     if (activeTab === "all") {
//       return [...skills.frontend, ...skills.backend, ...skills.other];
//     }
//     return skills[activeTab] || [];
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100">
//         <div className="bg-gradient-to-r from-gray-200/10 to-gray-500/30 py-10">
//           <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//               <div className="order-2 md:order-1">
//                 <h1 className="lg:text-3xl md:text-2xl text-[12px] font-bold mb-2">
//                   Hi, 👋 I'm Ndungutse Eugide
//                 </h1>
//                 <div className="h-1 w-20 bg-blue-600 mb-6"></div>
//                 <h2 className="font-bold text-gray-800 lg:text-3xl md:text-2xl text-[12px] mb-1">
//                   I Build Custom
//                 </h2>
//                 <p className="font-bold text-blue-700 lg:text-3xl md:text-2xl text-[12px] mb-1">
//                   Website Solutions
//                 </p>
//                 <p className="font-bold text-gray-800 lg:text-3xl md:text-2xl text-[12px] mb-1">
//                   That Help Your
//                 </p>
//                 <p className="font-bold text-blue-700 lg:text-3xl md:text-2xl text-[12px] mb-6">
//                   Business Grow
//                 </p>

//                 <div className="flex gap-4">
//                   <a
//                     href="Footer"
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
//                   >
//                     Contact Me
//                   </a>
//                   <button className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-3 py-2 rounded-md">
//                     View Projects
//                   </button>
//                 </div>
//               </div>
//               <div className="order-1 md:order-2 flex justify-center">
//                 <div className="relative w-64 h-64 md:w-80 md:h-80">
//                   <img
//                     className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full"
//                     src="/image/eugide.jpg"
//                     alt="Ndungutse Eugide - Software Developer"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-16 bg-white">
//           <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
//             <div className="text-center mb-12">
//               <h2 className="lg:text-3xl md:text-2xl text-[12px] font-bold text-gray-800">
//                 My Skills
//               </h2>
//               <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 mb-6"></div>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 I've worked with a variety of technologies and tools to create
//                 responsive and efficient web applications.
//               </p>
//             </div>

//             <div className="flex flex-wrap justify-center gap-4 mb-10">
//               <button
//                 onClick={() => filterSkills("all")}
//                 className={`px-5 py-2 rounded-full ${activeTab === "all"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//               >
//                 All Skills
//               </button>
//               <button
//                 onClick={() => filterSkills("frontend")}
//                 className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${activeTab === "frontend"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//               >
//                 <Globe size={16} /> Frontend
//               </button>
//               <button
//                 onClick={() => filterSkills("backend")}
//                 className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${activeTab === "backend"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//               >
//                 <Server size={16} /> Backend
//               </button>
//               <button
//                 onClick={() => filterSkills("other")}
//                 className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${activeTab === "other"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//               >
//                 <FileCode size={16} /> Other
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {getFilteredSkills().map((skill, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-50 p-6 rounded-sm transition-all"
//                 >
//                   <div className="flex justify-between items-center mb-2">
//                     <div className="flex items-center gap-2">
//                       {skillIcons[skill.name] || <FileCode size={18} />}
//                       <h3 className="font-semibold text-lg">{skill.name}</h3>
//                     </div>
//                     <span className="text-blue-600 font-medium">
//                       {skill.level}%
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${skill.level}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-gray-800">
//                 Services I Offer
//               </h2>
//               <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 mb-6"></div>
//               <p className="text-gray-600 max-w-2xl mx-auto font-semibold">
//                 I provide end-to-end web development solutions to help
//                 businesses establish their online presence.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-gray-300 p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
//                   <Globe size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Web Development</h3>
//                 <p className="text-gray-800 font-semibold">
//                   Custom websites built with modern technologies that are
//                   responsive, fast, and user-friendly.
//                 </p>
//               </div>

//               <div className="bg-gray-300 p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
//                   <Server size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Backend Development</h3>
//                 <p className="text-gray-800 font-semibold">
//                   Robust server-side solutions with efficient databases and APIs.
//                 </p>
//               </div>

//               <div className="bg-gray-300 p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
//                   <Code size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
//                 <p className="text-gray-800 font-semibold">
//                   Specialized websites that solve specific business problems.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;

import { useState, useEffect } from "react";
import { Code, FileCode, Globe, Server } from "lucide-react";

const skillIcons = {
  "HTML/CSS": <Globe className="text-blue-600" size={18} />,
  "JavaScript": <Code className="text-yellow-500" size={18} />,
  "React": <FileCode className="text-blue-400" size={18} />,
  "Tailwind CSS": <FileCode className="text-cyan-500" size={18} />,
  "Responsive Design": <Globe className="text-green-500" size={18} />,
  "Express": <Server className="text-gray-600" size={18} />,
  "MongoDB": <Server className="text-green-600" size={18} />,
  "API Development": <Code className="text-purple-500" size={18} />,
  "Node.js": <Code className="text-green-600" size={18} />,
  "Git/GitHub": <FileCode className="text-gray-700" size={18} />,
  "Figma Design": <FileCode className="text-purple-600" size={18} />
};

function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [visible, setVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  // Animation on initial load
  useEffect(() => {
    setVisible(true);
    
    // Add scroll event listener for section animations
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-section");
      const servicesSection = document.getElementById("services-section");
      
      if (skillsSection && isElementInViewport(skillsSection)) {
        setSkillsVisible(true);
      }
      
      if (servicesSection && isElementInViewport(servicesSection)) {
        setServicesVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Trigger once on load to check initial visibility
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to check if element is in viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
    );
  };

  const skills = {
    frontend: [
      { name: "HTML/CSS", level: 80 },
      { name: "JavaScript", level: 55 },
      { name: "React", level: 65 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Responsive Design", level: 78 },
    ],
    backend: [
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "API Development", level: 60 },
      { name: "Node.js", level: 60 },
    ],
    other: [
      { name: "Git/GitHub", level: 75 },
      { name: "Responsive Design", level: 80 },
      { name: "Figma Design", level: 50 },
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
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="bg-gradient-to-r from-gray-200/10 to-gray-500/30 py-10">
          <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div 
                className={`order-2 md:order-1 transition-all duration-1000 transform ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h1 className="lg:text-3xl md:text-2xl text-[12px] font-bold mb-2">
                  Hi, 👋 I'm Ndungutse Eugide
                </h1>
                <div className={`h-1 w-20 bg-blue-600 mb-6 transition-all duration-700 ${
                  visible ? "w-20" : "w-0"
                }`}></div>
                <h2 className="font-bold text-gray-800 lg:text-3xl md:text-2xl text-[12px] mb-1 transition-all duration-700 delay-100">
                  I Build Custom
                </h2>
                <p className="font-bold text-blue-700 lg:text-3xl md:text-2xl text-[12px] mb-1 transition-all duration-700 delay-200">
                  Website Solutions
                </p>
                <p className="font-bold text-gray-800 lg:text-3xl md:text-2xl text-[12px] mb-1 transition-all duration-700 delay-300">
                  That Help Your
                </p>
                <p className="font-bold text-blue-700 lg:text-3xl md:text-2xl text-[12px] mb-6 transition-all duration-700 delay-400">
                  Business Grow
                </p>

                <div className="flex gap-4 transition-all duration-700 delay-500">
                  <a
                    href="#footer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
                  >
                    Contact Me
                  </a>
                  <button className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-3 py-2 rounded-md">
                    View Projects
                  </button>
                </div>
              </div>
              <div className={`order-1 md:order-2 flex justify-center transition-all duration-1000 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}>
                <div className="relative w-64 h-64 md:w-80 md:h-80 ">
                  <img
                    className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full transition-all duration-500 "
                    src="/image/eugide.jpg"
                    alt="Ndungutse Eugide - Software Developer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="skills-section" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
            <div className={`text-center mb-12 transition-all duration-700 transform ${
              skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h2 className="lg:text-3xl md:text-2xl text-[12px] font-bold text-gray-800">
                My Skills
              </h2>
              <div className={`h-1 w-20 bg-blue-600 mx-auto mt-2 mb-6 transition-all duration-500 ${
                skillsVisible ? "w-20" : "w-0"
              }`}></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I've worked with a variety of technologies and tools to create
                responsive and efficient web applications.
              </p>
            </div>

            <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 delay-300 transform ${
              skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <button
                onClick={() => filterSkills("all")}
                className={`px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 ${activeTab === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                All Skills
              </button>
              <button
                onClick={() => filterSkills("frontend")}
                className={`px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 ${activeTab === "frontend"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                <Globe size={16} /> Frontend
              </button>
              <button
                onClick={() => filterSkills("backend")}
                className={`px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 ${activeTab === "backend"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                <Server size={16} /> Backend
              </button>
              <button
                onClick={() => filterSkills("other")}
                className={`px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 ${activeTab === "other"
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
                  className="bg-gray-50 p-6 rounded-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    opacity: skillsVisible ? 1 : 0,
                    transform: skillsVisible ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      {skillIcons[skill.name] || <FileCode size={18} />}
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                    <span className="text-blue-600 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: skillsVisible ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="services-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:w-4/5 lg:w-3/4">
            <div className={`text-center mb-12 transition-all duration-700 transform ${
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h2 className="text-3xl font-bold text-gray-800">
                Services I Offer
              </h2>
              <div className={`h-1 w-20 bg-blue-600 mx-auto mt-2 mb-6 transition-all duration-500 ${
                servicesVisible ? "w-20" : "w-0"
              }`}></div>
              <p className="text-gray-600 max-w-2xl mx-auto font-semibold">
                I provide end-to-end web development solutions to help
                businesses establish their online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe size={32} />,
                  title: "Web Development",
                  description: "Custom websites built with modern technologies that are responsive, fast, and user-friendly."
                },
                {
                  icon: <Server size={32} />,
                  title: "Backend Development",
                  description: "Robust server-side solutions with efficient databases and APIs."
                },
                {
                  icon: <Code size={32} />,
                  title: "Custom Solutions",
                  description: "Specialized websites that solve specific business problems."
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-300 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 text-center"
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    opacity: servicesVisible ? 1 : 0,
                    transform: servicesVisible ? 'translateY(0)' : 'translateY(40px)'
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 transition-all duration-300 hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-800 font-semibold">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Home;
