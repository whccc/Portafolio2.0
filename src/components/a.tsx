interface s {
    prueba: {
        hola: string
    }
}

const a = ({ prueba }: { prueba: s }) => {
    return <div>{prueba}</div>
}

export default a
