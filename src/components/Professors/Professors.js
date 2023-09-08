import "./Professors.css";
import { GiClubs, GiSpades, GiHearts, GiDiamonds } from "react-icons/gi";
function Professors() {
  return (
    <>
      <div className="professor">
        <div className="prof-container">
          <div className="prof">
            <div className="prof_top-left">
              <h1>A</h1>
              <GiDiamonds />
            </div>
            <div className="prof_top-right">
              <GiDiamonds />
              <h1>A</h1>
            </div>
            <div className="prof_top-middle">
              <h1>Aaron Rababh</h1>
            </div>
          </div>
          <div className="prof">
            <div className="prof_top-left">
              <h1>K</h1>
              <GiClubs />
            </div>
            <div className="prof_top-right">
              <GiClubs />
              <h1>K</h1>
            </div>
            <div className="prof_top-middle">
              <h1>Mounib Khanfar</h1>
            </div>
            <div className="prof_top-mdri">
              <p></p>
            </div>
          </div>
        </div>
        <div className="prof-container">
          <div className="prof">
            <div className="prof_top-left">
              <h1>J</h1>
              <GiSpades />
            </div>
            <div className="prof_top-right">
              <GiSpades />
              <h1>J</h1>
            </div>
            <div className="prof_top-middle">
              <h1>Ahmad Meilod</h1>
            </div>
          </div>
          <div className="prof">
            <div className="prof_top-left">
              <h1>A</h1>
              <GiHearts />
            </div>
            <div className="prof_top-right">
              <GiHearts />
              <h1>A</h1>
            </div>
            <div className="prof_top-middle">
              <h1>Ali Alzuabi</h1>
            </div>
          </div>
        </div>
        <div className="prof-container">
          <div className="prof">
            <div className="prof_top-left">
              <h1>A</h1>
              <GiDiamonds />
            </div>
            <div className="prof_top-right">
              <GiDiamonds />
              <h1>A</h1>
            </div>
            <div className="prof_top-middle">
              <h1>Ahmad Meilod</h1>
            </div>
          </div>
          <div className="prof">
            <div className="prof_top-left">
              <h1>A</h1>
              <div></div>
            </div>
            <div className="prof_top-right">
              <div></div>
              <h1>A</h1>
            </div>
            <div className="prof_top-middle">
              <h1>Ali Alzuabi</h1>
            </div>
          </div>
        </div>
        <div className="prof-container">
          <div className="prof">
            <div className="prof_top-left">
              <h1>A</h1>
              <div></div>
            </div>
            <div className="prof_top-right">
              <div></div>
              <h1>A</h1>
            </div>
            <div className="prof_top-middle">
              <h1>Ahmad Meilod</h1>
            </div>
          </div>
          <div className="prof">
            <div className="prof_top-left">
              <h1>A</h1>
              <div></div>
            </div>
            <div className="prof_top-right">
              <div></div>
              <h1>A</h1>
            </div>
            <div className="prof_top-middle">
              <h1>Ali Alzuabi</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Professors;