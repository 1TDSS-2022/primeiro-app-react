import React from "react";
import carroTesla from '../../img/3ylQptesla-model-s-plaid.jpg'
import Parceiros from "../parceiros/Parceiros";

export default function Carros(){
    return(
        <div>
            <figure>
                <img src={carroTesla} alt="É O FUTURO!" width="350px"/>
                <figcaption>
                Um carro que representa o futuro
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Gol</li>
                <li>Corsa</li>
                <li>Del Rey</li>
            </ul>
            <Parceiros/>
        </div>
    )
}