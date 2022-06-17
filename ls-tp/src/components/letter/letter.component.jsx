import React from "react";
import "../letter/letter.css";
function LetterComponent(letra){
    return(
        <div className="col text-center">
        {letra}
        </div>
    )
}
export default LetterComponent;