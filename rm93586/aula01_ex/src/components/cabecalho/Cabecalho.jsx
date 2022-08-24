import React from "react";


//Para ser visualizado pelos outros componentes, é necessário exportar o componente.
export default function Cabecalho() {
    const tag = <strong>Olá React!</strong>
    return (
        <header>
            MINHA APLICAÇÃO REACT!
            <p>Iniciando componente filho</p>
        </header>
    )
}