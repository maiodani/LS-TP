import React from "react";
import LetterComponent from "../letter/letter.component";

function RowComponent(nCol){
    var letters =[];
    for(let i =0;i<nCol;i++){
        letters.push(LetterComponent("T"));
    }
    return(
        <div className="row">
            letters
        </div>
    )
}
export default RowComponent;