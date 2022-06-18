import React from "react";
import { WORDS_BASICO,WORDS_INTERMEDIO,WORDS_AVANCADO } from "../constants";
import WordCompoment from "../words/words.component";
import "../sidepanel/sidepanel.css";

function SidepanelComponent(props){
    const {selectedLevel}= props;
    console.log(props);
    let words =[];
    switch(selectedLevel){
        case "1":
            for(let i =0;i<WORDS_BASICO.length;i++){
                words.push(WordCompoment(WORDS_BASICO[i]))
            }
            break;
        case "2":
            for(let i =0;i<WORDS_INTERMEDIO.length;i++){
                words.push(WordCompoment(WORDS_INTERMEDIO[i]))
            }
            break;
        case "3":
            for(let i =0;i<WORDS_AVANCADO.length;i++){
                words.push(WordCompoment(WORDS_AVANCADO[i]))
            }
            break;
        case "0":
            return;
    }
    return(
        <div className="sidepanel">
        {words}
        </div>
    )
}

export default SidepanelComponent;