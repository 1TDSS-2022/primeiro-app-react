import React from "react";

export default function Cabecalho(){
    const titulo = 'Minha Aplicação REACT'

    return(
     
        <div>
            <header>
                {titulo.toUpperCase()}
                <p>Iniciando component filho</p>
            </header>
        </div>

       
    )
}