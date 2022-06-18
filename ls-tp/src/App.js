import logo from './logo.svg';
import './App.css';
import { WORDS_AVANCADO, WORDS_BASICO, WORDS_INTERMEDIO } from "./components/constants/index";
import { useState } from "react";
import BoardComponent from "./components/board/board.component";
import TituloComponent from "./components/titulo/titulo.compoment";
import SidepanelComponent from './components/sidepanel/sidepanel.compoment';
import ButtonsComponent from './components/buttons/buttons.component';
import ScoreComponent from './components/score/score.component';
import time from './components/time/time.component';
let nCol=0,nRow=0,score=0;
function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  //const [timer, setTimer] = useState(TIMEOUTGAME);


    const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
      removeListeners(nRow,nCol);
      removeClasses();
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
      listeners(nRow,nCol);
    }
  };

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
    console.log(value);
    if (value === "2"){
      nRow=14;nCol=16;
    } else if(value === "3"){
        nRow=16;nCol=18;
    }else if(value ==="1"){
        nRow=12;nCol=14;
    }else{
        nRow=0;nCol=0;
    }
  }

  function checkEnd(WORDS){
    let aux=0;
    for(let i=0;i<WORDS.length;i++){
      aux+=WORDS[i].length;
    }
    if(score==aux){
      console.log("ACABOU")
      window.alert("Score:"+score);
      score=0;
      document.getElementById("scoreSpan").innerText=score;
      removeClasses();
      setSelectedLevel(1);
      setGameStarted(false);
    }
  }

  function removeClasses(){
    let aux = document.querySelectorAll(".found_word");
    for(let ele of aux){
      ele.classList.remove("found_word");
    }
    aux = document.querySelectorAll(".found_letter");
    for(let ele of aux){
      ele.classList.remove("found_letter");
    }
    score=0;
  }

  function checkWord(aux){
    let word = aux;
    let wordReverse=aux.split("").reverse().join("");
    switch(selectedLevel){
      case "1":
        for(let i=0;i<WORDS_BASICO.length;i++){
          if(WORDS_BASICO[i]==word){
              document.getElementById(WORDS_BASICO[i]).classList.add("found_word");
              score+=WORDS_BASICO[i].length;
              document.getElementById("scoreSpan").innerText=score;
              checkEnd(WORDS_BASICO);
              return true;
          }
          if(WORDS_BASICO[i]==wordReverse){
              document.getElementById(WORDS_BASICO[i]).classList.add("found_word");
              score+=WORDS_BASICO[i].length;
              document.getElementById("scoreSpan").innerText=score;
              checkEnd(WORDS_BASICO);
              return true;
          }
        }
        break;
        case "2":
          for(let i=0;i<WORDS_INTERMEDIO.length;i++){
            if(WORDS_INTERMEDIO[i]==word){
                document.getElementById(WORDS_INTERMEDIO[i]).classList.add("found_word");
                score+=WORDS_INTERMEDIO[i].length;
                document.getElementById("scoreSpan").innerText=score;
                checkEnd(WORDS_INTERMEDIO);
                return true;
            }
            if(WORDS_INTERMEDIO[i]==wordReverse){
                document.getElementById(WORDS_INTERMEDIO[i]).classList.add("found_word");
                score+=WORDS_INTERMEDIO[i].length;
                document.getElementById("scoreSpan").innerText=score;
                checkEnd(WORDS_INTERMEDIO);
                return true;
            }
          }
        break;
        case "3":
          for(let i=0;i<WORDS_AVANCADO.length;i++){
            if(WORDS_AVANCADO[i]==word){
                document.getElementById(WORDS_AVANCADO[i]).classList.add("found_word");
                score+=WORDS_AVANCADO[i].length;
                document.getElementById("scoreSpan").innerText=score;
                checkEnd(WORDS_AVANCADO);
                return true;
            }
            if(WORDS_AVANCADO[i]==wordReverse){
                document.getElementById(WORDS_AVANCADO[i]).classList.add("found_word");
                score+=WORDS_AVANCADO[i].length;
                document.getElementById("scoreSpan").innerText=score;
                checkEnd(WORDS_AVANCADO);
                return true;
            }
          }
        break;
    }
  }
  let letters = [];
  function btnTapped(target){
    if(!target.classList.contains("click_letter")){
        target.classList.add("click_letter");
    }else{
        target.classList.remove("click_letter");
    }
    if(letters.length<2){
        letters.push(target);
    }
    if(letters.length==2){
        let split1 = letters[0].id.split("|");
        let split2 = letters[1].id.split("|");
        let word = "";
        let split1x = parseInt(split1[0]);
        let split1y = parseInt(split1[1]);
        let split2x = parseInt(split2[0]);
        let split2y = parseInt(split2[1]);
        if(split1x == split2x ){ // HORRIZONTAL
            if(split1y<split2y){
                for(let i=split1y;i<=split2y;i++){
                    word+=document.getElementById(split1x+"|"+i).getAttribute("datapos");
                }
                if(checkWord(word)){
                    for(let i=split1y;i<=split2y;i++){
                        document.getElementById(split1x+"|"+i).classList.add("found_letter");
                    }
                }
            }else{
                for(let i=split2y;i<=split1y;i++){
                    word+=document.getElementById(split2x+"|"+i).getAttribute("datapos");
                }
                if(checkWord(word)){
                    for(let i=split2y;i<=split1y;i++){
                        document.getElementById(split2x+"|"+i).classList.add("found_letter");
                    }
                }               
            }
        }
        if(split1[1] == split2[1]){ //VERTICAL
            if(split1x<split2x){
                for(let i=split1x;i<=split2x;i++){
                    word+=document.getElementById(i+"|"+split1y).getAttribute("datapos");
                }
                if(checkWord(word)){
                    for(let i=split1x;i<=split2x;i++){
                        document.getElementById(i+"|"+split1y).classList.add("found_letter");
                    }
                }
            }else{
                for(let i=split2x;i<=split1x;i++){
                    word+=document.getElementById(i+"|"+split2y).getAttribute("datapos");
                }
                if(checkWord(word)){
                    for(let i=split2x;i<=split1x;i++){
                        document.getElementById(i+"|"+split2y).classList.add("found_letter");
                    }
                }               
            }
        }
        let aux1=Math.abs(split1x-split2x);
        let aux2=Math.abs(split1y-split2y);
        if(aux1==aux2){//DIAGONAL
            if(split1x<split2x){//SPLIT1X MENOR QUE SPLIT2X
                if(split1y<split2y){//SPLIT1Y MENOR QUE SPLIT2Y
                    for(let i=split1x,j=split1y;i<=split2x && j<=split2y;i++,j++){
                        word+=document.getElementById(i+"|"+j).getAttribute("datapos");
                    }
                    if(checkWord(word)){
                        for(let i=split1x,j=split1y;i<=split2x && j<=split2y;i++,j++){
                            word+=document.getElementById(i+"|"+j).classList.add("found_letter");
                        }
                    }
                }else{//SPLIT1Y MAIOR QUE SPLIT2Y
                    for(let i=split1x,j=split1y;i<=split2x && j>=split2y;i++,j--){
                        word+=document.getElementById(i+"|"+j).getAttribute("datapos");
                    }
                    if(checkWord(word)){
                        for(let i=split1x,j=split1y;i<=split2x && j>=split2y;i++,j--){
                            word+=document.getElementById(i+"|"+j).classList.add("found_letter");
                        }
                    }
                }
            }else{//SPLIT1X MAIOR QUE SPLIT2X
                if(split1y>split2y){//SPLIT1Y MAIOR QUE SPLIT2Y
                    for(let i=split1x,j=split1y;i>=split2x && j>=split2y;i--,j--){
                        word+=document.getElementById(i+"|"+j).getAttribute("datapos");
                    }
                    if(checkWord(word)){
                        for(let i=split1x,j=split1y;i>=split2x && j>=split2y;i--,j--){
                            word+=document.getElementById(i+"|"+j).classList.add("found_letter");
                        }
                    }
                }else{//SPLIT1Y MENOR QUE SPLIT2Y
                    for(let i=split1x,j=split1y;i>=split2x && j<=split2y;i--,j++){
                        word+=document.getElementById(i+"|"+j).getAttribute("datapos");
                    }
                    if(checkWord(word)){
                        for(let i=split1x,j=split1y;i>=split2x && j<=split2y;i--,j++){
                            word+=document.getElementById(i+"|"+j).classList.add("found_letter");
                        }
                    }
                }
            }
            
        }
        letters[0].classList.remove("click_letter");
        letters[1].classList.remove("click_letter");
        letters = [];
    }
  }
  function listeners(nRow,nCol){
    removeClasses();
    for(let i=0;i<parseInt(nRow);i++){
        for(let j=0;j<parseInt(nCol);j++){
            let aux = document.getElementById(i+"|"+j);
            aux.onclick = function() {btnTapped(aux);};
        }
    }
  }
  function removeListeners(nRow,nCol){
    for(let i=0;i<parseInt(nRow);i++){
        for(let j=0;j<parseInt(nCol);j++){
            let aux = document.getElementById(i+"|"+j);
            aux.onclick = function() {};
        }
    }
  }

  return (
    <div id="container">
      <div className='row'>
        <div className='col-2'>
          </div>
        <div className='col-6 m-2'>
          <TituloComponent></TituloComponent>
        </div>
      </div>
      <div className='row'>
        <div className='col-2'>
          <div className='row'>
          <ButtonsComponent gameStarted={gameStarted}
          onGameStart={handleGameStart}
          onLevelChange={handleLevelChange}
          selectedLevel={selectedLevel} >
          </ButtonsComponent>
          </div>
          <div className='row score mt-4'>
            <ScoreComponent score={score}>
            </ScoreComponent>
          </div>
        </div>
        <div className='col-6 m-2'>
          <BoardComponent selectedLevel={selectedLevel} gameStarted={gameStarted}></BoardComponent>
        </div>
        <div className='col-1'>
          <SidepanelComponent selectedLevel={selectedLevel} gameStarted={gameStarted}></SidepanelComponent>
        </div>
        <div className='col-3'>
        </div>
      </div>
    </div>
  );
}


export default App;