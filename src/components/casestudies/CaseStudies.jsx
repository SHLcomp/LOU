import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Filter from "../filter/Filter";
import data from "../../data/casestudies";
import { useState } from "react";
import "./CaseStudies.scss";
import Orb from "../orb/Orb";

const CaseStudies = () => {
  // Take only 4 items
//   const limitedData = data.slice(3, 7);

  const [items, setItems] = useState(data);
  const filterItems = [...new Set(data.map((value) => value.cat))];
  // Filtering function
  const handleFilter = (category) => {
    if (category === "all") {
      setItems(data);
    } else {
      const newItems = data.filter((item) => item.cat === category);
      setItems(newItems);
    }
  };
  return (
    <div>
      <Navbar />
      <Orb/>
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
        <div className="filter">
          <Filter filterItems={filterItems} onFilter={handleFilter} />
        </div>
        <div className="cards">
          {items.map((proj) => {
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
