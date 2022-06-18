import React from "react";
import { WORDS_AVANCADO, WORDS_BASICO, WORDS_INTERMEDIO } from "../constants";

import RowComponent from "../row/row.component";

const DIRECAO = [
    0,//cima
    1,//baixo
    2,//esquerda
    3,//direita
    4,//diagonal baixo cima /
    5,//diagonal baixo cima \
    6,//diagonal cima baixo /
    7,//diagonal cima baixo \
];
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * ((max-1) - min) + min);
  }

function prencherLetrasRandom(matriz){
    let min=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] == " "){
                matriz[i][j] = min[getRandomArbitrary(0, min.length)];
            }
        }
        
    }
}
function verificaEscrever(tamanho, direcao, l, c, matriz){
    switch(direcao){
        case 0:
            for (let i = 0; i < tamanho; i++) {
                if(matriz[l-i][c] != " "){
                    return false;
                }
            }
        break;
        case 1:
            for (let i = 0; i < tamanho; i++) {
                if(matriz[l+i][c] != " "){
                    return false;
                }
            }
        break;
        case 2: 
            for (let i = 0; i < tamanho; i++) {
                if(matriz[l][c-i] != " "){
                    return false;
                }
            }
        break;
        case 3: 
            for (let i = 0; i < tamanho; i++) {
                if(matriz[l][c+i] != " "){
                    return false;
                }
            }
        break;
        case 4://diagonal baixo cima /
            for (let i = 0; i < tamanho; i++) {
                if(matriz[l-i][c+i] != " "){
                    return false;
                }
            }
        break;
        case 5://diagonal baixo cima \
            for (let i = 0; i < tamanho; i++) {
                if(matriz[l-i][c-i] != " "){
                    return false;
                }
            }
        break;
        case 6://diagonal cima baixo /
            for (let i = 0; i < tamanho; i++) {
                if(matriz[l+i][c-i] != " "){
                    return false;
                }
            }
        break;
        case 7://diagonal cima baixo \
            for (let i = 0; i < tamanho; i++) {
                if(matriz[l+i][c+i] != " "){
                    return false;
                }
            }
        break;
    }
    return true;
}
function preecheBoardComPalavras(lmax,cmax,WORDS){
    let bidimensional = [];
    let int_usados = [];
    let palavraInt;

    //criar array
    for (let i = 0; i < lmax; i++) {
        let array = [];
        for (let j = 0; j < cmax; j++) {
            array.push(" ");
        }
        bidimensional.push(array);
    }
    

    while(int_usados.length != WORDS.length){
        let l = getRandomArbitrary(0, lmax);
        let c = getRandomArbitrary(0, cmax);
    
        let flag = 1;
        do{
            flag = 1;
            
            palavraInt = getRandomArbitrary(0,WORDS.length); 
            int_usados.forEach(element => {
                if(element == palavraInt){
                    flag = 0;
                }
            }); 
        }while(flag == 0);
        int_usados.push(palavraInt);
        let temp;

        let direcao = getRandomArbitrary(0, DIRECAO.length); 
        switch(direcao){
            case 0://cima
                if(WORDS[palavraInt].length-1 <= l){
                    if(verificaEscrever(WORDS[palavraInt].length, direcao, l, c, bidimensional)){
                        for (let i = 0; i < WORDS[palavraInt].length; i++) {
                            bidimensional[l-i][c] = WORDS[palavraInt].charAt(i);
                        }
                    }else{
                        int_usados.pop();
                    }
                }else{
                    int_usados.pop();
                }
            break;
            case 1://baixo
                if(WORDS[palavraInt].length-1 <= (lmax-1)-l){
                    if(verificaEscrever(WORDS[palavraInt].length, direcao, l, c, bidimensional)){
                        for (let i = 0; i < WORDS[palavraInt].length; i++) {
                            bidimensional[l+i][c] = WORDS[palavraInt].charAt(i);
                        }
                    }else{
                        int_usados.pop();
                    }
                }else{
                    int_usados.pop();
                }
            break;
            case 2://esquerda
                if(WORDS[palavraInt].length-1 <= c){
                    if(verificaEscrever(WORDS[palavraInt].length, direcao, l, c, bidimensional)){
                        for (let i = 0; i < WORDS[palavraInt].length; i++) {
                            bidimensional[l][c-i] = WORDS[palavraInt].charAt(i);
                        }
                    }else{
                        int_usados.pop();
                    }
                }else{
                    int_usados.pop();
                }
            break;
            case 3://direita
                if(WORDS[palavraInt].length-1 <= (cmax-1)-c){
                    if(verificaEscrever(WORDS[palavraInt].length, direcao, l, c, bidimensional)){
                        for (let i = 0; i < WORDS[palavraInt].length; i++) {
                            bidimensional[l][c+i] = WORDS[palavraInt].charAt(i);
                        }
                    }else{
                        int_usados.pop();
                    }
                }else{
                    int_usados.pop();
                }
            break;
            case 4://diagonal baixo cima /
                temp = WORDS[palavraInt].length-1;
                if(temp <= l && temp <= (cmax-1)-c){
                    if(verificaEscrever(WORDS[palavraInt].length, direcao, l, c, bidimensional)){
                        for (let i = 0; i < WORDS[palavraInt].length; i++) {
                            bidimensional[l-i][c+i] = WORDS[palavraInt].charAt(i);
                        }
                    }else{
                        int_usados.pop();
                    }
                }else{
                    int_usados.pop();
                }
            break;
            case 5://diagonal baixo cima \
                temp = WORDS[palavraInt].length-1;
                if(temp <= l && temp <= c){
                    if(verificaEscrever(WORDS[palavraInt].length, direcao, l, c, bidimensional)){
                        for (let i = 0; i < WORDS[palavraInt].length; i++) {
                                bidimensional[l-i][c-i] = WORDS[palavraInt].charAt(i);
                        }
                    }else{
                        int_usados.pop();
                    }
                }else{
                    int_usados.pop();
                }
            break;
            case 6://diagonal cima baixo /
                temp = WORDS[palavraInt].length-1;
                if(temp <= (lmax-1)-l && temp <= c){
                    if(verificaEscrever(WORDS[palavraInt].length, direcao, l, c, bidimensional)){
                        for (let i = 0; i < WORDS[palavraInt].length; i++) {
                            bidimensional[l+i][c-i] = WORDS[palavraInt].charAt(i);
                        }
                    }else{
                        int_usados.pop();
                    }
                }else{
                    int_usados.pop();
                }
            break;
            case 7://diagonal cima baixo \
                temp = WORDS[palavraInt].length-1;
                if(temp <= (lmax-1)-l && temp <= (cmax-1)-c){
                    if(verificaEscrever(WORDS[palavraInt].length, direcao, l, c, bidimensional)){
                        for (let i = 0; i < WORDS[palavraInt].length; i++) {
                            bidimensional[l+i][c+i] = WORDS[palavraInt].charAt(i);
                        }
                    }else{
                        int_usados.pop();
                    }
                }else{
                    int_usados.pop();
                }
            break;
        }
    }
    //prencherLetrasRandom(bidimensional);
    return bidimensional;
}


function BoardComponent(props){
    const {selectedLevel}= props;
    let nRow,nCol;
    if (selectedLevel === "2"){
        nRow=14;nCol=16;
    } else if(selectedLevel === "3"){
        nRow=16;nCol=18;
    }else if(selectedLevel ==="1"){
        nRow=12;nCol=14;
    }else{
        nRow=0;nCol=0;
    }
    if(nRow!=0 && nCol!=0){
        let rows =[];
        let matriz = [];
        switch(selectedLevel){
            case "1":
                matriz = preecheBoardComPalavras(nRow,nCol,WORDS_BASICO);
                break;
            case "2":
                matriz = preecheBoardComPalavras(nRow,nCol,WORDS_INTERMEDIO);
                break;
            case "3":
                matriz = preecheBoardComPalavras(nRow,nCol,WORDS_AVANCADO);
                 break;
        }        
        for(let i =0;i<parseInt(nRow);i++){
            rows.push(RowComponent(nCol,i,matriz[i]));
        }
        return( 
            <div className="rows">
                {rows}
            </div>
        )
    }else{
        let rows =[];
        let matriz = [];
        return(
            <div className="d-none">{rows}</div>
        )
    } 
}
export default BoardComponent;