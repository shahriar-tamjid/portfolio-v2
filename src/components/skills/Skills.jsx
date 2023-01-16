import React from "react";
import Frameworks from "./Frameworks";
import Programming from "./Programming";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>

      <div className="skills__container container grid">
        <Programming />
        <Frameworks />
      </div>
    </section>
  );
};

export default Skills;
