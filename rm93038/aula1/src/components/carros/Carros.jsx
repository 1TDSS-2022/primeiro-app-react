import React from "react";
import carroLindo from '../../img/broncoazul.jpg';
import Parceiros from "../parceiros/Parceiros";

export default function Carros(){
    return(
        <div>
            <figure>
                <img src="{carroLindo}" alt="UTILITÁRIO" width="200px"/>
                <figcaption>
                    Um carro que enfrenta qualquer parada!
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Gol</li>
                <li>Tesla</li>
                <li>Del Rey</li>
            </ul>
            <Parceiros/>
        </div>
    )
}