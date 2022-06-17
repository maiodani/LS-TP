import React from "react";
import { WORDS } from "../constants";
import WordCompoment from "../words/words.component";

function SidepanelComponent(){
    let words =[];

    for(let i =0;i<10;i++){
        words.push(WordCompoment(WORDS[i]))
    }
    return(
        words
    )
}

export default SidepanelComponent;