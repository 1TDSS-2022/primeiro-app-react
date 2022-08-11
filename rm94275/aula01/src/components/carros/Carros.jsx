import React from "react"
import carroLindo from '../../img/download.jpg'

export default function Carros(){
    return(
        <div>
            <figure>
                <img src={carroLindo} alt="Carro" width="200px"/>

                <figcaption>
                Um carro que enfrenta qualquer parada!
                </figcaption>
            </figure>
            <ul>
                <li>Fusaca</li>
                <li>Celta</li>
                <li>Gol</li>
                <li>Corsa</li>
                <li>Kwid</li>
            </ul>
            <Carros/>
        </div>
    )
}