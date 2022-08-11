import React from "react";
import carroImagem from "../../img/bellair.jpg"
import Parceiros from "../../parceiros/Parceiros";

export default function Carros(){
    return(
        <div>
            <figure>
                <img src={carroImagem} alt="UTILITÁRIO" />
                <figcaption>
                    Um carro que enfrenta qualquer parada!
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Kombi</li>
                <li>Santana</li>
                <li>Golzin quadrado</li>
            </ul>
            <Parceiros/>
        </div>
    )
}