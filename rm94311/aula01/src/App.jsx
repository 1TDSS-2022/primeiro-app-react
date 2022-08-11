import React from "react"
import './App.css'
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos"

export default function App(){
    
    const aluno = "Douglas"
    const turma = "ADS"
    const profs = ["Thiago", "Gondo", "Cordeiro", "Miguel", "Spinola", "Phill"]
    
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