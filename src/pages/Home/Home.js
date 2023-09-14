import "./Home.css";
import Professors from "../../components/Professors/Professors";
import Box from "../../assets/box.png";
import MiniBox from "../../components/MiniBox/MiniBox";
import { motion } from "framer-motion";
function Home() {
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
              <img src={Box} />
            </div>
          </div>
          <div className="home__top__second">
            <div className="home__top__second--card-container">
              <div className="card">
                <h2>Use our website to enhance your learning process.</h2>
                <p>
                  Before you can view and participate in the website, you need to signup with you
                  AUK email, to ensure that only students can have access to experince the full,
                  unlimited features.
                </p>
                <div className="input-container">
                  <input type="email" placeholder="Email"></input>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home__middle">
          <div className="home__middle-top">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, translateY: "-20px" }}
              style={{ transition: "opacity 10s", translateY: "0px" }}>
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
