import React from 'react'
import teslaCar from '../../img/tesla.jpg'

export default function ListaDeAlunos(props) {
  return (
    <div>
        <h2>Nome Aluno: {props.alunoProp}</h2>
        <h2>TURMA: {props.turmaProp}</h2>
        <h2>Professores</h2>
        <ul>
            <li>{props.profsProp[0]}</li>
        </ul>
        <figure>
            <figcaption>
                <img src={teslaCar} alt="94" />
            </figcaption>
        </figure>
    </div>
  )
}
