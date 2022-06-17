import React from "react";
import { WORDS } from "../constants";
import WordCompoment from "../words/words.component";
import "../sidepanel/sidepanel.css";

function SidepanelComponent(){
    let words =[];

    for(let i =0;i<10;i++){
        words.push(WordCompoment(WORDS[i]))
    }
    return(
        <div className="sidepanel m-0">
        {words}
        </div>
    )
}

export default SidepanelComponent;