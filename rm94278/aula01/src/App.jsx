import React from "react";
import './App.css'
import Cabecalho from "./componnents/cabecario/Cabecalho";
import Carros from "./componnents/carros/Carros";
import ListaDeAlunos from "./componnents/listaDeAlunos/ListaDeAlunos";

export default function App() {

    const aluno = "Luan"
    const turma = "1TDSS"
    const profs = ["Thiago", "Gondo", "Cordeiro", "Miguel", "Spinola"]

    const tag = <strong>Ola React!</strong>
    return(
        <div>

            <h2>Informações</h2>
            <ListaDeAlunos 
            alunoProp={aluno}
            turmaProp={turma}
            profsProp={profs}
            />
        </div>
    )
}