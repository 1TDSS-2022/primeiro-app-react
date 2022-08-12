import React from "react"
import car from '../../img/lamborgini.jpg'

export default function Carros(){
    return(
<div>
        <figure>
                <img src={car} alt="melhor carro" />
            <figcaption>
                O carro mais veloz!
            </figcaption>
            <ul>
                <li>Celta</li>
                <li>Kombi</li>
                <li>Corsa</li>
                <li>Caravan</li>
            </ul>
        </figure>

</div>

    )

}