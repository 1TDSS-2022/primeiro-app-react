import React from "react";
import "./App.css";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Carros from "./components/carros/Carros";
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos";

// export default function App() {
//     const tag = <strong>Olá React!</strong>
//     return (
//         <div>
//             <h1>{tag}</h1>
//             <h2>Subtítulo</h2>
//         </div>
//     )
// }

const aluno = "Luan"
const turma = "1TDSS"
const profs = ["Thiago ", "Gondo ", "Cordeiro ", "Spinola ", "Miguel "]


export default function App() {
    const tag = <strong>Olá React!</strong>
    return (
        <>
        <Cabecalho/>
        <Carros/>
            <h2>INFORMAÇÕES</h2>
            <ListaDeAlunos
            alunoProp={aluno}
            turmaProp={turma}
            profsProp={profs}
            />
        </>
    )
}