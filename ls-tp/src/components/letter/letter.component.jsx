import React from "react";
import "../letter/letter.css";


function LetterComponent(letra,col,row){
    let aux=col+"|"+row;
    return(
        <div key={aux} id={aux} datapos={letra} className='col text-center' >
            {letra}
        </div>
    )
}
export default LetterComponent;