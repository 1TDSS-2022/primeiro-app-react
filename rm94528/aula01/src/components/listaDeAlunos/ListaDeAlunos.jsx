import React from "react";

export default function ListaDeAlunos(props){
    return(
        <div>
            <h2>Nome do aluno: {props.alunoProp}</h2>
            <h2>Nome da turma: {props.turmaProp}</h2>
            <h2>Professores</h2>
            <ul>
                <li>{props.profsProp[0]}</li>
                <li>{props.profsProp[1]}</li>
                <li>{props.profsProp[2]}</li>
                <li>{props.profsProp[3]}</li>
            </ul>
        </div>
    )
}