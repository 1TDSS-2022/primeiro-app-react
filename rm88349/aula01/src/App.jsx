import React from "react";
import "./App.css"
import Cabecalho from "./components/cabecalho/cabecalho";
import Parceiros from "./components/parceiros/Parceiros";
import Carros from "./components/carros/Carros";
import listaDeAlunos from "./components/listaDeAlunos/listaDeAlunos";


export default function App(){

    const aluno = "Luan"
    const turma = "1TDSS"
    const profs = ["Tiago", "Gondo", "Cordeiro", "Miguel", "Spinola", "Alexandre"]


    const tag = <strong>Olá React</strong>
    
    return(
        <>
           
            
            <h2>Informações</h2>
            <listaDeAlunos
            
                alunoProp ={aluno}
                turmaProp = {turma}
                profsProp = {profs}

            />



        </>
    )

}

