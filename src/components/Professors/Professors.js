import "./Professors.css";
import { GiClubs, GiSpades, GiHearts, GiDiamonds } from "react-icons/gi";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
const Prof = ({ major, letter, icon, name, stars }) => {
  return (
    <>
      <div className="prof">
        <div className="prof-top">
          <p>{major}</p>
        </div>
        <div className="prof-top-left">
          <h1>{letter}</h1>
          {icon}
        </div>
        <div className="prof-bottom-right">
          {icon}
          <h1>{letter}</h1>
        </div>
        <div className="prof_middle">
          <h1>{name}</h1>
        </div>
        <div className="prof_bottom">
          {stars === 5 && (
            <>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </>
          )}
          {stars === 4 && (
            <>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar />
            </>
          )}
          {stars === 3 && (
            <>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </>
          )}
          {stars === 2 && (
            <>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </>
          )}
          {stars === 1 && (
            <>
              <AiTwotoneStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </>
          )}
        </div>
      </div>
    </>
  );
};

function Professors() {
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
      transition: "all 0.8s",
    };
  }
  return (
    <>
      <div className="prof-heading">
        <motion.h1
          initial={{ opacity: 0, translate: "0 15px" }}
          whileInView={{ opacity: 1, translate: "0 -10px" }}
          transition={{ type: "tween", duration: 1 }}>
          A record of our rated professors based on your vote
        </motion.h1>
      </div>

      <div className="professor">
        <div className="prof-container">
          <Prof major="CSIS" letter="A" icon={<GiClubs />} name="Aaron Rababah" stars={5} />
          <Prof major="ARAB" letter="J" icon={<GiHearts />} name="Ahmad Meliod" stars={4} />
          <Prof major="CPEG" letter="A" icon={<GiSpades />} name="Mounib Khanfar" stars={5} />
          <Prof major="MATH" letter="2" icon={<GiDiamonds />} name="Mutlaq Almutairi" stars={1} />
          <Prof major="PHYS" letter="J" icon={<GiClubs />} name="Ali Alzuabi" stars={3} />
        </div>
        <div className="prof-container">
          <Prof major="CSIS" letter="A" icon={<GiClubs />} name="Aaron Rababah" stars={5} />
          <Prof major="ARAB" letter="J" icon={<GiHearts />} name="Ahmad Meliod" stars={4} />
          <Prof major="CPEG" letter="A" icon={<GiSpades />} name="Mounib Khanfar" stars={5} />
          <Prof major="MATH" letter="2" icon={<GiDiamonds />} name="Mutlaq Almutairi" stars={1} />
          <Prof major="PHYS" letter="J" icon={<GiClubs />} name="Ali Alzuabi" stars={3} />
        </div>
      </div>
    </>
  );
}

export default Professors;
