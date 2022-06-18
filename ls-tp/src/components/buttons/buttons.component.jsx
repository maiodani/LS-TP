import React from "react";
import "../buttons/buttons.css";
function ButtonsComponent(props){
    const { gameStarted, selectedLevel, onGameStart, onLevelChange } = props;
    const gameStartedClass = gameStarted ? " gameStarted" : ""; 
    return(
        <div className="row justify-content-centers m-1">
            <form className="button form justify-content-center p-1">
                <fieldset className="form-group">
                    <select className="m-1"
                    id="btLevel"
                    defaultValue="0"
                    onChange={onLevelChange}
                    disabled={gameStarted}
                    >
                    <option defaultValue value="0">
                        Seleccione...
                    </option>
                    <option value="1">Básico (12x14)</option>
                    <option value="2">Intermédio (14x16)</option>
                    <option value="3">Avançado (16x18)</option>
                    </select>
                </fieldset>
                <button className="m-1"
                    type="button"
                    id="btPlay"
                    disabled={selectedLevel === "0"}
                    onClick={onGameStart}
                >
                    {gameStarted ? "Parar jogo" : "Iniciar Jogo"}
                </button>
            </form>
        </div>
    )
}
export default ButtonsComponent;