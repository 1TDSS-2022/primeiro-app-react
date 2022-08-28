import React from "react";
import './App.css'
import ListaDeAluno from "./components/cabecalho/listaDeAlunos/ListaDeAlunos";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Carros from "./components/cabecalho/carros/Carros";

export default function App(){

    const aluno = "Wesley"
    const turma = "1TDSS"
    const prof = ["Cordeiro", "Alexandre", "Miguel", "Tiago", "Miguel"]

    const tag = <strong>Olá React!</strong>
    return(
        <div>
            
            <h2>Informações</h2>
            <ListaDeAluno
            alunoProp={aluno}
            turmaProp={turma}
            profProp={prof}

            />
        </div>
    )
}