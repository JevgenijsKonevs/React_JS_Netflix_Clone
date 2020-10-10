import React, { useState, useEffect } from "react";
import "../css/Nav.scss";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src={require("../img/netflix_logo.png")}
        alt="Netflix logo"
        className="nav__logo"
      />
      <img
        className="nav__avatar"
        src={require("../img/avatar.png")}
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
