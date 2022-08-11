import React from "react";
import './App.css'
import Carros from "./components/carros/Carros";
import Parceiros from "./components/parceiros/Parceiros";
import Cabecalho from "./components/cabecalho/Cabecalho";
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos";


export default function App(){

    const aluno = "Livia"
    const turma = "1TDSS"
    const profs = ["Thiago", "Gondo", "Cordeiro", "Miguel", "Spinola", "Ale"]

    const tag = <strong>Olá React!</strong>
    return(
        <div>
            <h2>INFORMAÇÕES</h2>
            <ListaDeAlunos
            alunoProp = {aluno}
            turmaProp = {turma}
            profsProp = {profs}
            />
        </div>
    )
}