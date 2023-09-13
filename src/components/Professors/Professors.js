import "./Professors.css";
import { GiClubs, GiSpades, GiHearts, GiDiamonds } from "react-icons/gi";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";

const Prof = ({ letter, icon, name, stars }) => {
  return (
    <>
      <div className="prof">
        <div className="prof_top-left">
          <h1>{letter}</h1>
          {icon}
        </div>
        <div className="prof_top-right">
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
  return (
    <>
      <div className="professor">
        <div className="prof-container">
          <Prof letter="A" icon={<GiClubs />} name="Aaron Rababah" stars={5} />
          <Prof letter="J" icon={<GiHearts />} name="Ahmad Meliod" stars={4} />
          <Prof letter="A" icon={<GiSpades />} name="Mounib Khanfar" stars={5} />
          <Prof letter="2" icon={<GiDiamonds />} name="Mutlaq Almutairi" stars={1} />
          <Prof letter="N" icon={<GiClubs />} name="Ali Alzuabi" stars={3} />
        </div>
      </div>
    </>
  );
}

export default Professors;
