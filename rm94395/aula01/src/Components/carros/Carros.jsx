import React from 'react'
import teslaCar from '../../img/tesla.jpg'
import Parceiros from '../parceiros/Parceiros'

export default function Carros() {
    return(
        <div>
            <figure>
                <img src={teslaCar} alt="All Eletric Car" width="500px" />
                <figcaption>
                </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Voiagem</li>
                <li>Caramo</li>
                <li>Tesla</li>
                <li>Santana</li>
            </ul>
            <Parceiros/>
        </div>
    )
}