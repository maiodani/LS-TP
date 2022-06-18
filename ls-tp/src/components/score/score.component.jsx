import React from "react";
import "../score/score.css";
function ScoreComponent(props){
    return(
        <div className="scoreDiv">
            <div className="row labelDiv"><span className="labelSpan">SCORE</span></div>
            <span id="scoreSpan" className="scoreSpan label label-default mt-1 ">{props.score}</span>
        </div>
    )
}

export default ScoreComponent;