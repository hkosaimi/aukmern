import logo from "../../assets/logo.png";
import "./Navbar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [closeAni, setCloseAni] = useState("");

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
              <Link to="/" onClick={() => setToggle(true)}>
                Home
              </Link>
              <Link onClick={() => setToggle(true)}>Courses</Link>
              <Link onClick={() => setToggle(true)}>About</Link>
              <Link onClick={() => setToggle(true)}>Contact</Link>
              <div className="button_container">
                <Link to="/login" onClick={() => setToggle(true)}>
                  Log in
                </Link>
                <Link to="/signup" onClick={() => setToggle(true)}>
                  Signup
                </Link>
              </div>
            </div>
          )}
          {toggle && <div className="links_container close_animated"></div>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
