import React from "react"
import './App.css'
import ListaDeAlunos from "./components/listaDeAlunos/listaDeAlunos"

export default function App(){

    const aluno = "Marcos"
    const turma = "ADS"
    const profs = ["Gondo", "Thiago", "Cordeiro", "Miguel", "Spinola"]

    return (

        <div>
            <h1>informações</h1>
            <ListaDeAlunos
            alunoProp = {aluno}
            turmaProp = {turma}
            profsProp = {profs}
            />
        </div>

    )

}