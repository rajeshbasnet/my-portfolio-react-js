import React from "react";
import undrawFirst from "../assets/SVG/asset2.svg";

const About = () => {
  return (
    <section id="about" style={{ width: "85%" }} className="about-me mx-auto font-rale h-screen overflow-hidden flex items-center">
      <div className="flex items-center flex-wrap">
        <div className="personal-info w-1/2 pr-20">
          <h3 className="text-2xl font-bold">
            <span className="username border-b-4">Hi, I'm Rajesh Basnet</span>
          </h3>
          <p className="text-left  mt-6">
            I have high level of interest in learning and improving myselft as a programmer and mostly as a person. I have an insatiable hunger when
            it comes to improving. If provided, I am ready to engross myslef in the work.
          </p>
          <p className="text-left mt-6">
            Besides skills, what makes me suitable for your work is that I have a good problem solving skill and a decent behavior that might attract
            you.
          </p>
        </div>

        <div className="undraw-illustration__first w-1/2 flex align-items-center justify-end">
          <img src={undrawFirst} alt={"illustration"} className="w-4/5" />
        </div>
      </div>
    </section>
  );
};

export default About;
