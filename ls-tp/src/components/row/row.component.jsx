import React from "react";
import LetterComponent from "../letter/letter.component";

function RowComponent(nCol,i,rowData){
    let letters =[];
    for(let i =0;i<parseInt(nCol);i++){
        letters.push(LetterComponent(rowData[i]));
    }
    return(
        <div key={i} className="row">
            {letters}
        </div>
    )
}
export default RowComponent;