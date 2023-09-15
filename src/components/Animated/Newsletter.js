import React from "react";
import { motion } from "framer-motion";
import news4 from "../../assets/news4.png";
import news4_1 from "../../assets/news4_1.png";
import news4_2 from "../../assets/news4_2.png";
function Newsletter() {
  return (
    <>
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
    </>
  );
}

export default Newsletter;
