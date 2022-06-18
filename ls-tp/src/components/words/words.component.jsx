import React from "react";

function WordCompoment(word){
    let words =[];
    return(
        <div key={word} id={word} className="row text-center">
            <p>{word}</p>
        </div>
    )
}

export default WordCompoment;