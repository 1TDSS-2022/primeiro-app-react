import React from "react";
import './App.css'
import Cabecalho from "./components/cabecalho/cabecalho";
import Carros from "./components/carros/Carros";
import ListaAlunos from "./components/listaAlunos/ListaAlunos";
import Parceiros from "./components/parceiros/Parceiros";
// criar estrutura do componente--- assinatura (APP nome)

export default function App(){

    const aluno = "Filipe"
    const turma = "1TDSS"
    const prof = ["Thiago","Alias","Gondo"]


    const tag = <strong>Olá React!!!</strong>
        return(
            // <div>
            //    <Cabecalho/>
            //     <h1>{tag}</h1>
            //     <h2>Subtítulo</h2>
            //     <Carros/>
            //     <Parceiros/>
            // </div>
         <div>
            <h2>Info</h2>
            <ListaAlunos alunoProp={aluno}
                         turmaProp={turma}
                         profProp={prof}
             />
         </div>
            

        )
}