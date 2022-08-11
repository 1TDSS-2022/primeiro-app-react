import React from 'react' 
import "./App.css"
import Cabecalho from './components/cabecalho/Cabecalho'
import Carros from './components/carros/Carros'
import ListaAulnos from './components/listaAlunos/ListaAlunos'

export default function App(){
    const aluno = "Henrique"
    const turma = "1TDSS"
    const profs = ["Spinola", "Gondo", "Alê", "Thiago", "Miguel"]
    
    return(
        <>
            <Cabecalho/>
            <Carros/> 
            <h2>Informaçôes</h2>
            <ListaAulnos
            alunoProp={aluno}
            turmaProp={turma}
            profsProp={profs}
            />   
        </>
    )
}