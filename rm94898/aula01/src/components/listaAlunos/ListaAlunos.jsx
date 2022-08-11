import React from 'react'

export default function ListaAlunos(props) {

    const listItems = props.profsProp.map((number) =>
    <li>{number}</li>
  );

  return (
    <div>
        <h2>Nome aluno: {props.alunoProp}</h2>
        <h2>Turma: {props.turmaProp}</h2>
        <h2>Professores</h2>
        <ul>
            {listItems}
        </ul>
    </div>
  )
}
