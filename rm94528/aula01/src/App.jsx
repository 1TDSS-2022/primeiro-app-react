import React from "react";
import './App.css'
import Cabecalho from "./components/cabecalho/Cabecalho";
import Parceiros from "./parceiros/Parceiros";
import Carros from "./components/Carro/Carros";
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos";

export default function App(){
    const aluno = "Luan"
    const turma = "1TDSS"
    const profs = ["Thiago", "Gondo", "Cordeiro", "Alezão"]

    const tag = <strong>Olá React!</strong>

    return(
        <div>
           <h2>Informações</h2>
           <ListaDeAlunos
           alunoProp = {aluno}
           turmaProp = {turma}
           profsProp = {profs}
           />
        </div>
    )
}