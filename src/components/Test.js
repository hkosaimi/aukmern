import React from "react";
import Box from "../assets/box.png";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

import { useRef } from "react";
function Test() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <div ref={ref}></div>
      <img src={Box} />
    </>
  );
}

export default Test;
