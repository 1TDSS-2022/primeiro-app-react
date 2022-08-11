import React from "react";
import carrolindo from '../..img/bronco-ford.png'
import Parceiros from "../parceiros/Parceiros";

export default function Carros(){
    return(
        <div>
            <figure>
                <img src={carrolindo}  alt="UTILITÀRIO" width= "200px" />
                <figcaption>
                    Um carro que enfrenta qualquer parada!
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Gol</li>
                <li>Corsa</li>
                <li>Del Rei</li>


            </ul>
            <Parceiros/>
        </div>

    )

}