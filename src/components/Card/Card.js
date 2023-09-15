import React from "react";
import { motion } from "framer-motion";
import news4 from "../../assets/news4.png";
import news4_1 from "../../assets/news4_1.png";
import news4_2 from "../../assets/news4_2.png";
import Newsletter from "../Animated/Newsletter";
function Card() {
  return (
    <>
      <div className="home__top__second--card-container">
        <div className="card">
          <div className="news">
            <h2>Use our website to enhance your learning process.</h2>
            <Newsletter />
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
