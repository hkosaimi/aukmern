import React from "react";
import { motion } from "framer-motion";
import news4 from "../../assets/news4.png";
import news4_1 from "../../assets/news4_1.png";
import news4_2 from "../../assets/news4_2.png";
function Card() {
  return (
    <>
      <div className="home__top__second--card-container">
        <div className="card">
          <div className="news">
            <h2>Use our website to enhance your learning process.</h2>
            <div className="imgs_container">
              <img className="news4" src={news4} />
              <motion.img
                initial={{ translate: "0 0" }}
                whileInView={{ translate: ["0 -10px", "0 1px"] }}
                transition={{ type: "spring", duration: 3 }}
                className="news4_1"
                src={news4_1}
              />
              <img className="news4_2" src={news4_2} />
            </div>
          </div>
          <p>
            Before you can view and participate in the website, you need to signup with you AUK
            email, to ensure that only students can have access to experince the full, unlimited
            features.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Email"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
