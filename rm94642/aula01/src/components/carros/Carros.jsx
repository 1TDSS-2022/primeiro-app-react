import React from "react"
import carroLindo from '../../img/bronco-ford.jpg'
import Parceiros from '../parceiros/Parceiros'

export default function Carros() {
    return(
        <div>
            <figure>
                <img src={carroLindo} alt="Utilitario" width="200px"/>
                <figcaption>
                    Um carro que enfrenta qualquer parada!
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Gol</li>
                <li>Corsa</li>
                <li>Del rey</li>
            </ul>
            <Parceiros/>
        </div>
    )
}