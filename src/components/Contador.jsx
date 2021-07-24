import React, { useEffect, useState } from 'react'

function Contador() {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(() => {
        console.log("Efecto")
        
    }, [])

    return (
        <div>
            <h2>Contador#1: {contador1}</h2>
            <h2>Contador#2: {contador2}</h2>

            <button onClick={()=> setContador1(contador1+1)}>
                +Contador1
            </button>

            <button onClick={()=> setContador2(contador2+1)}>
                +Contador2
            </button>

        </div>
    )
}

export default Contador
