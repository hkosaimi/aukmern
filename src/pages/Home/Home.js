import "./Home.css";
import { motion } from "framer-motion";
import Professors from "../../components/Professors/Professors";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__top">
          <div className="home__top__first">
            <h1>Built by students for students.</h1>
            <p>
              Auknotes is a community for students to help them success during
              their college life. Only AUK'res can view and participate, no
              professors or tutors. Our journey just started.
            </p>
            <button>Explore</button>
          </div>
          <div className="home__top__second">
            <div className="home__top__second--card-container">
              <div className="card">
                <h2>Use our website to enhance your learning process.</h2>
                <p>
                  Before you can view and participate in the website, you need
                  to signup with you AUK email, to ensure that only students can
                  have access to experince the full, unlimited features.
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
            <h1>
              We're providing a variety of resources to guide you throughout
              your semester
            </h1>
          </div>
          <div className="courses_container">
            <motion.div
              className="courses_animation"
              initial={{ scale: 2 }}
              whileInView={{ scale: 1 }}>
              <span className="mini_box box1"></span>
              <div className="mini_box box2"></div>
              <div className="mini_box box3"></div>
              <div className="mini_box box4"></div>
              <div className="mini_box box5"></div>
              <div className="mini_box box6"></div>
              <div className="mini_box box7"></div>
              <div className="mini_box box8"></div>
              <div className="mini_box box1"></div>
              <div className="mini_box box2"></div>
              <div className="mini_box box3"></div>
              <div className="mini_box box4"></div>
              <div className="mini_box box5"></div>
              <div className="mini_box box6"></div>
              <div className="mini_box box7"></div>
              <div className="mini_box box8"></div>
            </motion.div>
            <motion.div
              className="courses_animation mdri"
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1 }}>
              <div className="mini_box box5"></div>
              <div className="mini_box box4"></div>
              <div className="mini_box box2"></div>
              <div className="mini_box box1"></div>
              <div className="mini_box box3"></div>
              <div className="mini_box box8"></div>
              <div className="mini_box box6"></div>
              <div className="mini_box box7"></div>
              <div className="mini_box box1"></div>
              <div className="mini_box box5"></div>
              <div className="mini_box box3"></div>
              <div className="mini_box box4"></div>
              <div className="mini_box box6"></div>
              <div className="mini_box box8"></div>
              <div className="mini_box box7"></div>
              <div className="mini_box box2"></div>
            </motion.div>
            <motion.div
              className="courses_animation adri"
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1 }}>
              <div className="mini_box box5"></div>
              <div className="mini_box box3"></div>
              <div className="mini_box box4"></div>
              <div className="mini_box box2"></div>
              <div className="mini_box box1"></div>
              <div className="mini_box box8"></div>
              <div className="mini_box box6"></div>
              <div className="mini_box box2"></div>
              <div className="mini_box box1"></div>
              <div className="mini_box box2"></div>
              <div className="mini_box box3"></div>
              <div className="mini_box box4"></div>
              <div className="mini_box box5"></div>
              <div className="mini_box box1"></div>
              <div className="mini_box box7"></div>
              <div className="mini_box box4"></div>
            </motion.div>
          </div>
        </div>
        <div className="home__bottom">
          <Professors />
        </div>
      </div>
    </>
  );
}

export default Home;
