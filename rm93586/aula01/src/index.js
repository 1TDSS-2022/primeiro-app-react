import ReactDOM from 'react-dom' //Importa o ReactDOM para renderizar o componente na tela
import React from 'react' //Importa o React para utilizar tags JSX
import App from './App' //Importa o componente App para usar no ReactDOM.render, assim ao invés de usar o html puro, usa-se o componente App


// Renderiza o texto dentro do elemento com id root
//ReactDOM.render("Olá React", document.getElementById('root'))


// Renderiza o texto dentro do DOM com uma tag h1
//ReactDOM.render(<h1>Olá React</h1>, document.getElementById('root'))

// const tag = <strong>Olá React!</strong>
// ReactDOM.render(<h1>{tag}</h1>, document.getElementById('root'))

// No lugar de usar o html puro, usa-se o componente App e nele estará o html puro
ReactDOM.render(<App />, document.getElementById('root'))
