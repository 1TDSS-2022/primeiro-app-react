import React from "react";
import bronco from "../../img/bronco-ford.jpg"
import Parceiros from "../parceiros/Parceiros";

export default function Carros(){
    return(
        <div>
            <figure>
                <img src={bronco} alt="É o que o prof gosta, fazer o que" />
                <figcaption>
                    Um carrp que enfrenta qualquer parada!
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Gol</li>
                <li>Corsa</li>
                <li>DelRey</li>
            </ul>
            <Parceiros/>
        </div>      

    )

}