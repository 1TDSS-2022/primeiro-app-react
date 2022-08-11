import React from "react";
import mazda from "../../imgs/mazda.jpg"
import Parceiros from "../parceiros/parceiros";

export default function Carros() {
    return (
        <div>
            <figure>
                <img src={mazda} alt="Carro do ran" width={800}/>
                <figcaption>
                    Um carro que drifita até montanha
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Gol</li>
                <li>Mazda</li>
                <li>Corsa</li>
                <li>Del Rey</li>
            </ul>
            <Parceiros/>
        </div>
    )
}
