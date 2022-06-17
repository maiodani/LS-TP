import React from "react";
import { WORDS } from "../../constants";
import RowComponent from "../../row/row.component";

function preecheBoardComPalavras(){
    let l = 10 , c = 10;
    let bidimensional = [];
    let array = [];
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < c; j++) {
            array.push(""+l+""+c);
        }
        bidimensional.push(array);
    }
}

function BoardComponent(nRow,nCol){
    var rows =[];
    for(let i =0;i<nRow;i++){
        rows.push(RowComponent(nCol));
    }
    return(
        rows
    )
}
export default BoardComponent;