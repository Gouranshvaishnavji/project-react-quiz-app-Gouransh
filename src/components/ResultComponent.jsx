import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Result.css";

export default function ResultComponent() {
  const location = useLocation();

  return (
    <div className="result-container">
      <div className="result-wrapper">
        <h1>Result</h1>
        <div className="score-section">
          <h3>Your Result</h3>
          <h1 className="result-score">{location.state.score}</h1>
          <div className="result-flex">
            <div className="result-details">
              <h5>Total Questions</h5>
              <h5>Attempted Questions</h5>
              <h5>Correct Answers</h5>
              <h5>Wrong Answers</h5>
            </div>
            <ul className="result-number">
              <li>{location.state.totalQuestions}</li>
              <li>{location.state.answeredQuestions}</li>
              <li>{location.state.correctAnswer}</li>
              <li>{location.state.wrongAnswer}</li>
            </ul>
          </div>
        </div>
        <div className="result-buttons">
          <Link to="/quiz">
            <button className="result-play">Play Again</button>
          </Link>
          <Link to="/">
            <button className="result-home">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


