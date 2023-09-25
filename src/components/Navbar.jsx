import React, { useState } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  if (darkMode) {
    document.body.classList.remove("light-mode");
    console.log("rann");
  } else {
    document.body.classList.add("light-mode");
  }
  const icon = darkMode ? <BsFillMoonFill /> : <BsMoon />;

  return (
    <div className="d-flex justify-content-between px-5 py-5 bg-elements align-items-center custom-text-white">
      <Link to="/" className="m-0 text-decoration-none custom-text-white fs-1">
        Where in the world?
      </Link>
      <div
        onClick={() => {
          document.body.classList.toggle("light-mode");
          setDarkMode(!darkMode);
          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        style={{ cursor: "pointer" }}
        className="d-flex gap-3 align-items-center "
      >
        {icon}
        <p className="m-0">{darkMode ? "Light mode" : "Dark mode"}</p>
      </div>
    </div>
  );
};

export default Navbar;
