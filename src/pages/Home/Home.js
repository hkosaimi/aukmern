import "./Home.css";
import Professors from "../../components/Professors/Professors";
import Box from "../../assets/box.png";
import MiniBox from "../../components/MiniBox/MiniBox";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

import { motion } from "framer-motion";
import Card from "../../components/Card/Card";
import { useScroll } from "framer-motion";

function Home() {
  /* const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref);

  let style = {
    opacity: 0,
    translate: "0 20px",
    marginBottom: 0,
  };
  if (isInView) {
    style = {
      translate: "0 -10px",
      opacity: 1,
    };
  } */

  return (
    <>
      <div className="home">
        <div className="home__top">
          <div className="home__top__first">
            <div className="home__left">
              <h1>Built by students for students.</h1>
              <p>
                Auknotes is a community for students to help them success during their college life.
                Only AUK'res can view and participate, no professors or tutors. Our journey just
                started.
              </p>
              <button>Explore</button>
            </div>
            <div className="home__right">
              <div></div>
              <img src={Box} />
            </div>
          </div>
          <div className="home__top__second">
            <Card />
          </div>
        </div>

        <div className="home__middle">
          <div className="home__middle-top">
            <motion.h1
              initial={{ opacity: 0, translate: "0 15px" }}
              whileInView={{ opacity: 1, translate: "0 -10px" }}
              transition={{ type: "tween", duration: 1 }}>
              We're providing a variety of resources to guide you throughout your semester
            </motion.h1>
          </div>
          <MiniBox />
        </div>
        <div className="home__bottom">
          <Professors />
        </div>
      </div>
    </>
  );
}

export default Home;
