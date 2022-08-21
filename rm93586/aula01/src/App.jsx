import React from "react"

export default function App() {
    const tag = <strong>Olá React!</strong>

    // Todo html dentro do react precisa estar em uma div(fragmento)
    return (
        <>
            <h1>{tag}</h1>
            <h2>Subtítulo</h2>
        </>
    )
}