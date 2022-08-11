import React from "react";
import carroLindo from "./../../img/8764653.png"
import carroTo from "./../../img/Ford-Bronco-2022-frente-1024x407.png"
import "./Carros.css"
import Parceiros from "../parceiros/Parceros";

export default function Carros(){

    return(
        <div>
            <h2>
                Carros
            </h2>
        <div className="teste">
                <figure>
                    <img  src={carroLindo} alt="Ford Bronco" width="350px" />
                </figure>
    
                <figure>
                    <img className="imagemTo" src={carroTo} alt="Ford Bronco"/>
                </figure>
            </div>

            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Ka</li>
                <li>Corsa</li>
                <li>Del Rey</li>
            </ul>

            <div className="teste">
                <Parceiros></Parceiros>
            </div>  
           
        </div>
    )
}