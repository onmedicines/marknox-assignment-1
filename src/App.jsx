import "./App.css";
import projectJSON from "./projects.json";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="psudo-body">
      <main className="w-screen h-screen bg-my-white lg:px-80 md:px-40 text-my-gray flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <section className="projects w-screen min-h-screen bg-my-white lg:px-80 md:px-40 text-my-gray flex flex-col gap-24 justify-center align-center">
        {projectJSON.map((project, index) => (
          <Project key={index} index={index} hostedAt={project.hostedAt} projectImgPath={project.path} projectName={project.name} projectAbout={project.about} />
        ))}
      </section>
    </div>
  );
}
