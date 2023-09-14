import React from "react";
import { motion } from "framer-motion";

const BoxTemplate = ({ order }) => {
  if (order === 1) {
    return (
      <>
        <motion.div
          className="courses_animation"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}>
          <div className={`mini_box box1`}></div>
          <div className={`mini_box box2`}></div>
          <div className={`mini_box box3`}></div>
          <div className={`mini_box box4`}></div>
          <div className={`mini_box box5`}></div>
          <div className={`mini_box box6`}></div>
        </motion.div>
      </>
    );
  }
  if (order === 2) {
    return (
      <>
        <motion.div
          className="courses_animation"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}>
          <div className={`mini_box box6`}></div>
          <div className={`mini_box box5`}></div>
          <div className={`mini_box box4`}></div>
          <div className={`mini_box box3`}></div>
          <div className={`mini_box box2`}></div>
          <div className={`mini_box box1`}></div>
        </motion.div>
      </>
    );
  }
  if (order === 3) {
    return (
      <>
        <motion.div
          className="courses_animation"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}>
          <div className={`mini_box box2`}></div>
          <div className={`mini_box box1`}></div>
          <div className={`mini_box box6`}></div>
          <div className={`mini_box box8`}></div>
          <div className={`mini_box box7`}></div>
          <div className={`mini_box box3`}></div>
        </motion.div>
      </>
    );
  }
};

function MiniBox() {
  return (
    <>
      <div className="courses_container">
        <BoxTemplate order={1} />
        <BoxTemplate order={2} />
        <BoxTemplate order={3} />
      </div>
    </>
  );
}

export default MiniBox;
