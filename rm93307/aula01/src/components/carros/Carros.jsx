import React from "react";
import carro from "../../img/carro.jpg"
import Parceiros from "../parceiros/Parceiros";

export default function Carros(){
    return(
        <>
            <figure>
                <img src={carro} alt="Carro" width="200px"/>
                <figcaption>
                Um carro que enfrenta quanquer parada!
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
        </>
    )
}