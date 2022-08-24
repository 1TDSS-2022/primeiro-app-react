import React from "react"
import carroLindo from '../../img/carro.jpg'
import "./Carros.css";
import Parceiros from "../parceiros/Parceiros";

export default function Carros() {
    return (

    <div>
        <figure>
        <img src={carroLindo} alt="Carro lindo"/>
        <figcaption>
            Um carro que enfrenta qualquer parada!
        </figcaption>
        </figure>
        <ul>
            <li>Fusca</li>
            <li>Celta</li>
            <li>Gol</li>
        </ul>
        <Parceiros/>
    </div>
    )
}