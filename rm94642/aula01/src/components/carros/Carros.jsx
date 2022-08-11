import React from "react"
import carroLindo from '../../img'
import Parceiros from "../../parceiros/Parceiros"

export default function Carros() {
    return(
        <div>
            <figure>
                <img src="{carroLindo}" width="200px" alt="Utilitario" />
                <figcaption>
                    Um carro que enfrenta qualquer parada
                </figcaption>
            </figure>
            <Parceiros>
            <ul>
                <li>fusca</li>
                <li>celta</li>
                <li>gol</li>
                <li>corsa</li>
                <li>del rey</li>
            </ul>
            </Parceiros>
        </div>
    )
}