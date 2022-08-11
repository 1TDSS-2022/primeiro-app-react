import React from 'react'
import './App.css'
import Cabecalho from './components/cabecalho/Cabecalho'
import Carros from './components/carros/Carros'
import ListaDeAlunos from './components/listaDeAlunos/ListaDeAlunos'

export default function App(){

    const aluno = "Luan"
    const turma = "1TDSS"
    const profs = ["Thiago", "Gondo", "Cordeiro", "Miguel", "Spinola"]

    const tag = <strong>Olá react ♥</strong>
    return(
        <div>
            <h2>INFORMAÇÕES</h2>
            <ListaDeAlunos
            alunoProp={aluno}
            turmaProp={turma}
            profsProp={profs}
            />
        </div>
    )
}