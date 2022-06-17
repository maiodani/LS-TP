import React from "react";
import "../letter/letter.css";


function LetterComponent(letra,col,row){
    let aux=col+"|"+row;
    return(
        <div key={aux} id={aux} data-pos={aux} className='col text-center' 
        //onClick={function(e) {
          //  btnTapped(e.target);    
          //}}
          >
            {letra}
        </div>
    )
}
export default LetterComponent;