import React from 'react'
import './App.css'
import Cabecalho from './components/cabecalho/Cabecalho'
import Carros from './components/carros/Carros'
import ListaDeAlunos from './components/listaDeAlunos/ListaDeAlunos'

export default function App() {

    const aluno = "Gustavo"
    const turma = "1TDSS"
    const profs = ["Thiago", " Gondo", " Alexandre", " Salvio"]

    const tag = <strong>Olá React!</strong>
    
    return (
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