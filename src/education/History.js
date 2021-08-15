import React from "react";
import undrawSecond from "../assets/SVG/asset1.svg";

const History = () => {
  return (
    <section className="education-history h-screen w-screen flex items-center font-rale ">
      <div className="w-8 mx-auto">
        <div className="header-container pb-10">
          <h1 className="text-center text-3xl font-bold">Education History</h1>
          <div className="hr h-1 w-36" />
        </div>

        <div className="w-full flex items-center mx-auto mt-10">
          <div className="w-full flex justify-center">
            <img src={undrawSecond} alt="undraw-illustration-second" className="w-3/5" />
          </div>

          <div className="w-full flex justify-center font-medium">
            <div className="history-info px-4 border-l-4 border-color-primary">
              <p>
                Nepal Police School
                <br />
                Sanga, Kavre
                <br />
                Graduated with an honor scoring G.P.A 3.6.
                <br />
              </p>

              <br />

              <p>
                Trinity International College
                <br />
                Dillibazar Height, Kathmandu
                <br />
                Graduated with an honor scoring G.P.A 3.45 in 11.
                <br />
                And with 3.24 G.P. A in 12
              </p>

              <br />

              <p>
                The British College
                <br />
                Thapathali, Kathmandu
                <br />
                Currently Studying BSc. (Hons) in Computing in TBC
                <br />
                Completed Third year Successfully
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
