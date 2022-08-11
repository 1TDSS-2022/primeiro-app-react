import React from "react";
import carroGrande from '../../img/bronco-ford.jpg'

export default function Carros(){
    return(
        <div>
            <figure>
                <img src= {carroGrande} alt="É sim" width={500}/>
                <figcaption>
                    Um carro que enfrenta qualquer parada!
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Gol</li>
                <li>Kombi</li>
                <li>Scort</li>
            </ul>
        </div>
    )
}