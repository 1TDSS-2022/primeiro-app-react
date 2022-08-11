import React from "react";
import './App.css'
import Cabecalho from "./components/cabecalho/Cabecalho";
import Carros from "./components/carros/Carros";
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos";

 //somente o componente pai passa informações para o filho

export default function App(){

    const aluno = "Breno"
    const turma = "1TDSS"
    const profs = ["Thiago", "Gondo", "Alexandre", "Salvio", "Cordeiro"]

    const tag = <strong>"Olá React!"</strong>
    
    return (
        <div>
            <h2>Informações</h2>
            <ListaDeAlunos
            alunoProp={aluno}
            turmaProp={turma}
            profsProp={profs}
            />

            {/* <Cabecalho/>
            <Carros></Carros>
            <h1>{tag}</h1>
            <h2>Subtítulo</h2> */}
        </div>
    )
}