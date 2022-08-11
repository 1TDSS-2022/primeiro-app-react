import imgMustang from "../../img/Mustang.jpg"
import Parceiros from "../parceiros/Parceiros"

export default function Carros(){
    return(
        <div>
            <figure>
                <img src={imgMustang} alt="carro Mustang" />
                <figcaption>
                    Um carro luxuoso e esportivo!
                </figcaption>
            </figure>
            <ul>
                <li>Gol quadrado</li>
                <li>Camaro</li>
                <li>DelRey</li>
                <li>Fusca</li>
                <li>Combi</li>
            </ul>
            <Parceiros/>
        </div>
    )
}