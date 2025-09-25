import { useCounter } from "@/Hooks/useCounter"
import { useMemo } from "react"


const heavyStuff = (iterationNumber: number) => {
    
    console.time('starting_heavyStuff')

    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...')
    }

    console.timeEnd('starting_heavyStuff')

    return `${iterationNumber} iteraciones realizadas`
}


export const MemoCounter = () => {

    const { counter, increment } = useCounter(40000)
    const { counter: smallCounter, increment: smallIncrement } = useCounter(10)

    const result = useMemo(() => heavyStuff(counter), [counter])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Memo - useMemo</h1>
            <hr />

            <h4>Contador: {counter}</h4>
            <h4>Contador: {smallCounter}</h4>

            <button
                className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer"
                onClick={() => increment()}
            >
                +1
            </button>

            <button className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer" onClick={() => smallIncrement()}>
                +1- 2.0
            </button>
        </div>
    )
}
