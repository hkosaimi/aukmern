import logo from "../../assets/logo.png";
import "./Navbar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState(false);

  function handleOpen() {
    setToggle(false);
    setActive(false);
  }
  function handleClose() {
    setToggle(true);
    setActive(true);
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <img src={logo} />
        </div>
        <div className="navbar__middle"></div>
        <div className="navbar__right">
          {toggle ? (
            <RiMenu3Fill onClick={handleOpen} />
          ) : (
            <AiOutlineClose className="close" onClick={handleClose} />
          )}
          {!toggle && (
            <div className="links_container">
              <Link to="/" onClick={handleClose}>
                Home
              </Link>
              <Link onClick={handleClose}>Courses</Link>
              <Link onClick={handleClose}>About</Link>
              <Link onClick={handleClose}>Contact</Link>
              <div className="button_container">
                <Link to="/login" onClick={handleClose}>
                  Log in
                </Link>
                <Link to="/signup" onClick={handleClose}>
                  Signup
                </Link>
              </div>
            </div>
          )}
          {active && <div className="links_container close_animated"></div>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
