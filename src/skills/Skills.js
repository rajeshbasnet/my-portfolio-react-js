import React from "react";
import { data } from "./data";

const Skills = () => {
  return (
    <section id="skills" className="skills w-screen h-screen bg-white font-rale flex items-center">
      <div className="w-4/5 mx-auto">
        <div className="heading-container">
          <h1 className="heading text-center pt-6 text-3xl font-bold">My Skills</h1>
          <div className="hr h-1 w-36" />
        </div>

        <div className="skills-container grid grid-cols-2 gap-10 mt-16">
          {data.map((skill, index) => {
            const { module, coverage } = skill;

            return (
              <div className="ind max-w-xl" key={index}>
                <div className="skillname flex justify-between font-medium">
                  <p>{module}</p>
                  <p>{coverage}%</p>
                </div>

                <div className="h-3 relative rounded-full overflow-hidden mt-3">
                  <div className="w-full h-full bg-gray-200 absolute"></div>
                  <div className={`w-${coverage / 10} h-full color-primary absolute`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
