import React from "react";
import Parceiros from "../parceiros/Parceiros";
import carroLindo from '../../img/Koenigsegg.webp';

export default function Carros(){
    return(
        <div>
            <figure>
                <img src={carroLindo} alt="Esportivo" width="300px" />
                <figcaption>
                    Um carro que engole qualquer Ferrari
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