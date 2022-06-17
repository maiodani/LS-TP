import React from "react";
import { WORDS } from "../constants";
import RowComponent from "../row/row.component";

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * ((max-1) - min) + min);
}

function prencherLetrasRandom(matriz){
    let min=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    let mai=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] == " "){
                matriz[i][j] = mai[getRandomArbitrary(0, min.length)];
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
    }
    return true;
}
function preecheBoardComPalavras(){
    const WORDS = [
        "angular",
        "bootstrap",
        "html",
        "javascript",
        "vue",
        "svelte",
        "react",
        "css",
        "backbone",
        "ember",
    ];
    const DIRECAO = [
        0,//cima
        1,//baixo
        2,//esquerda
        3//direita
    ];
    let lmax = 12;
    let cmax = 14;
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
    

    while(int_usados.length != 10){
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

        
        
        
        let direcao = getRandomArbitrary(0, DIRECAO.length); 
        switch(direcao){
            case 0:
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
            case 1:
                if(WORDS[palavraInt].length-1 <= l-lmax){
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
            case 2: 
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
            case 3: 
                if(WORDS[palavraInt].length-1 <= c-cmax){
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
        }
    }
    prencherLetrasRandom(bidimensional);
    return bidimensional;
}

function BoardComponent(data){
    let rows =[];
    let matriz = [];
    matriz = preecheBoardComPalavras();
    for(let i =0;i<parseInt(data.nRow);i++){
        rows.push(RowComponent(data.nCol,i,matriz[i]));
    }
    console.log(rows);
    return(
        rows
    )
}
export default BoardComponent;