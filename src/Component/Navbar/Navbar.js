import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import "./navbar.scss";

export default function Navbar() {
  const alertNotif = () => {
    swal.fire("Good job!", "You clicked the button!", "success");
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="div">
          <Link className="link" to="/">
            POP-IT
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Content</Link>
            </li>
            <li>
              <a
                href="https://github.com/HafidhIrsyad"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="banner">
        <p className="title">POP IT!</p>
        <p className="deskripsi">
          A Pop-It (also known as Go Pop and Last One Lost)
          <br />
          is a fidget toy consisting of a usually-brightly
          <br />
          colored silicone tray with pokable bubbles
        </p>
        <button onClick={alertNotif}>SEE NOW!</button>
      </div>
    </div>
  );
}
