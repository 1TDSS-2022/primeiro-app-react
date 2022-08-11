import React from "react";
import './App.css'  
// import Cabecalho from "./components/cabecalho/Cabecalho";
// import Carros from "./components/carros/Carros";
import ListaAlunos from "./components/listaAlunos/ListaAlunos";


export default function App(){

    const aluno = "Luan";
    const turma = "1TDSS"
    const profs = ["Thiago", "Gondo", "Cordeiro", "Miguel", "Spinolos"]

    const tag = 'Olá Mundo'


    return(
        
        <div>
            <h1>Informações</h1>
            {/* <Cabecalho></Cabecalho> */}
            {/* <h1>{tag}</h1>
            <h2>Subtitulo</h2> */}
            {/* <Carros></Carros> */}

            <ListaAlunos
            alunoProp={aluno}
            turmaProp={turma}
            profsProp={profs}
            />


           
        </div>

        
     
    

    )
}