import React from "react";
import jepp from '../../../img/jepp.jpg'
import Parceiros from "../parceiros/Parceiros";

export default function Carros(){
    return(
       <div>
            <figure>
                <img src={jepp} alt="UTILITÁRIO!" width="200px"/>
           
                <figcaption>
                    JEEP é JEEP Recusa imitações! 
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Gol</li>
                <li>Voyage</li>
                <li>Polo</li>
                <li>Onix</li>
            </ul>
            <Parceiros/>

       </div>
    )
}