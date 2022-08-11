import React from "react"
import carroLindo from '../../img/MicrosoftTeams-image.pngnpm'
import Parceiros from "../parceiros/Parceiros"

export default function Carros() {
    return(
        <div>
            <figure>
                <h2>Carros</h2>

                <img src={carroLindo} alt="UTILITÁRIO" width="200"/>
                <figcaption>
                    Um carro que enfrenta qualquer parada!
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