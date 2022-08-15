import React from 'react'
import './App.css'
//import Cabecalho from './components/cabecalho/Cabecalho'
//import Carros from './components/carros/Carros'
//import Parceiros from './components/parceiros/Parceiros'
import ListaDeAlunos from './components/listaDeAlunos/ListaDeAlunos'


export default function App() {

    const aluno = "Luan"
    const turma = "1TDSS"
    const profs = ["Thiago", "Gondo", "Cordeiro", "Miguel", "Spinola", "Ale"]

    
    return (
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