import React from "react"

export default function ListaDeAluno(props){
    return(
        <div>
            <h2>Nome do ALuno: {props.alunoProp}</h2>
            <h2>Turma: {props.turmaProp}</h2>
            <h2>Professores: </h2>
            <ul>
                <li>{props.profProp[0]}</li>
                <li>{props.profProp[1]}</li>
                <li>{props.profProp[2]}</li>
                <li>{props.profProp[3]}</li>
                <li>{props.profProp[4]}</li>
            </ul>
        </div>
    )
}