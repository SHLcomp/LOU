import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import data from "../../data/casestudies";
import "./CaseStudies.scss";

const CaseStudies = () => {
  return (
    <div>
      <Navbar />
      <section className="casestudies">
        <div className="header">
          <h1>Projects We Have Done</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At earum
            asperiores quo, expedita sunt aperiam amet ipsa quia rerum optio
            unde quas commodi vel fugit inventore laudantium facere animi. Vel.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aliquid ad nobis modi beatae impedit ea odio, doloremque nam quia
            fugiat sapiente, provident esse excepturi alias soluta cupiditate!
            Vitae, quasi.
          </p>
        </div>
        <div className="cards">
          {data.map((proj) => {
            return (
              <div
                className="card golden-glow-text"
                data-text={proj.cat}
                style={{
                  "--proj-cat": `${proj.cat}`,
                }}
              >
                <div className="text">
                  <h3>{proj.name}</h3>
                  <p>{proj.des}</p>
                  <a href="#" className="cta2 a">
                    See More
                  </a>
                </div>
                <div
                  className="img"
                  data-text={proj.img}
                  style={{ "--proj-img": `${proj.img}` }}
                >
                  <img src={proj.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;
