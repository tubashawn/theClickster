import React from "react";
import "./Score.css";


const Score = (props) => (
    <span className="badge badge-danger">
        Your score: {props.correct}
    </span>
);

export default Score;