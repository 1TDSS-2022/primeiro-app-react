import React from 'react'

export default function ListaDeAlunos(props) {

    const listItens = props.profsProp.map((number) => 
    <li>{number}</li>);

  return (
    <div>
        <h2>Nome aluno: {props.alunoProp}</h2>
        <h2>Turma: {props.turmaProp}</h2>
        <h2>Professores</h2>
        <ul>
            {listItens}
        </ul>
    </div>
  )
}
