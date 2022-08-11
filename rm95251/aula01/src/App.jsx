import React from 'react'
import './App.css'
import Cabecalho from './components/cabecalho/Cabecalho'
import Carros from './components/carros/Carros'
import ListaAlunos from './components/listaAlunos/ListaAlunos'

export default function App(){

    const aluno = "Luan"
    const turma = "1TDSS"
    const profs = ["Thiago", "Gondo", "Cordeiro", "Spinola", "Miguel"]
    const tag = <strong>Olá React!</strong>
    
    return(
        <div>
            
            <h2>INFORMAÇÕES</h2>
            <ListaAlunos
            alunoProp={aluno}
            turmaProp={turma}
            profsProp={profs}
            />

        </div>
    )
}