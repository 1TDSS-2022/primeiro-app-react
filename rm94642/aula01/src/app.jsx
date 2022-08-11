import React from 'react'
import './App.css'
import Cabecalho from './components/cabecalho/Cabecalho'
import Carros from './components/carros/Carros'
import Parceiros from './parceiros/Parceiros'

export default function App() {
    const tag = <strong>Ola React</strong>
    return (
        <div>
        <Cabecalho></Cabecalho>
        <Parceiros></Parceiros>
        <h1>{tag}</h1>
        <h2>Subtitulo</h2>
        </div>
    )
}