import logo from "../../assets/logo.png";
import "./Navbar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Links = () => (
  <>
    <p>Home</p>
    <p>Courses</p>
    <p>About</p>
    <p>Contact</p>
  </>
);

function Navbar() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <img src={logo} />
        </div>
        <div className="navbar__middle"></div>
        <div className="navbar__right">
          {toggle ? (
            <RiMenu3Fill onClick={() => setToggle(false)} />
          ) : (
            <AiOutlineClose onClick={() => setToggle(true)} />
          )}
          {!toggle && (
            <div className="links_container">
              <Links />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
