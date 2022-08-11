import React from 'react'

export default function listaDeAlunos(props) {
  return (
    <div>

        <h2>Nome aluno: {props.alunoProp}</h2>
        <h2>Turma aluno: {props.turmaProp}</h2>
        <h2>Professores do aluno:</h2>
        <ul>
            <li>{props.profsProp[0]}</li>
        </ul>

    </div>
  )
}
