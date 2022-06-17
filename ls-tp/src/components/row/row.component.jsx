import React from "react";
import LetterComponent from "../letter/letter.component";

function RowComponent(nCol,n,rowData){
    let letters =[];
    for(let i =0;i<parseInt(nCol);i++){
        letters.push(LetterComponent(rowData[i],n,i,));
    }
    let aux = n+"|"+parseInt(nCol)
    return(
        <div key={aux} className="row">
            {letters}
        </div>
    )
}
export default RowComponent;