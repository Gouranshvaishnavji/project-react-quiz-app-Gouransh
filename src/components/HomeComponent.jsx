import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";

export default function HomeComponent(){

  return(
    <div className="main">
      <h3 className="main-heading">Quiz App</h3>
      <Link to="quiz" className="bt">
        <button className="bt">Let's Play</button>
      </Link>
    </div>
  )
}