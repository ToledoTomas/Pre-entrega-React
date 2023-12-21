import { useState } from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initialValue)
    const increment = () => {
        if (count < 10){
            setCount(count+1)}
        }

    const decrement = () => {
        if(count > 0){
            setCount(count-1)}
        }


    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{count}</h1>
            <button onClick={increment}>incrementar</button>
            <button onClick={decrement}>decrementar</button>
        </div>
    )
}
export default ItemCount