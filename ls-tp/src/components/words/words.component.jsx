import React from "react";

function WordCompoment(word){
    let words =[];
    return(
        <div key={word} className="row text-center p-1">
            <p>{word}</p>
        </div>
    )
}

export default WordCompoment;