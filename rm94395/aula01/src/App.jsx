import React from 'react'
import './App.css'
import Cabecalho from './Components/header/Cabecalho';
import Carros from './Components/carros/Carros';
import ListaDeAlunos from './Components/listaDeAlunos/ListaDeAlunos';

export default function App() {
    const tag = <strong><h1>"Olá React"</h1></strong>

    const aluno = "Luan"
    const turma = "1TDSS"
    const profs = ["Thiago", "Gondo", "Cordeiro", "Miguel", "Spinola"]

    return (
        <React.Fragment>
            <h2>INFORMAÇÕES</h2>
            <ListaDeAlunos
                alunoProp = {aluno}
                turmaProp = {turma}
                profsProp = {profs}
            />
        </React.Fragment>
    )
}