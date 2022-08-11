import React from "react";

export default function ListaDeAlunos(props){
    return(
        <>
            <h2>Nome aluno: {props.alunoProp}</h2>
            <h2>Turma: {props.turmaProp}</h2>
            <ul>
                <li>{props.profsProp[0]}</li>
                <li>{props.profsProp[1]}</li>
                <li>{props.profsProp[2]}</li>
                <li>{props.profsProp[3]}</li>
                <li>{props.profsProp[4]}</li>
                <li>{props.profsProp[5]}</li>
            </ul>
        </>
    )
}