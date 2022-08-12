import React from "react";

export default function ListaAlunos(props){
    return(
        <div>
            <h2>Nome aluno : {props.alunoProp}</h2>
            <h2>Nome da Turma: {props.turmaProp}</h2>
            <h2>Professores</h2>
            <ul>
                <li>props.profProp[0]</li>
            </ul>
        </div>
    )
}