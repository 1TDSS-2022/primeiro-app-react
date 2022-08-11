import React from 'react'

export default function ListaDeAlunos(props) {
  return (
    <div>
        <h2>Nome do aluno: {props.alunoProp}</h2>
        <h2>Turma: {props.turmaProp}</h2>
        <h2>Professores: </h2>
        <ul>
            <li>{props.profsprop[0]}</li>
            <li>{props.profsprop[1]}</li>
            <li>{props.profsprop[2]}</li>
            <li>{props.profsprop[3]}</li>
            <li>{props.profsprop[4]}</li>
        </ul>
    </div>
  )
}
