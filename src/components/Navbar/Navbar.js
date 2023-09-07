import logo from "../../assets/logo.png";
import "./Navbar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            <AiOutlineClose className="close" onClick={() => setToggle(true)} />
          )}
          {!toggle && (
            <div className="links_container">
              <p>Home</p>
              <p>Courses</p>
              <p>About</p>
              <p>Contact</p>
              <div className="button_container">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Signup</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
