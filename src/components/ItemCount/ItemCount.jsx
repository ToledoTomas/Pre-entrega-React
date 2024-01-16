import classes from './ItemCount.module.css'
import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity+1)}
        }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)}
        }


    return (
        <div className={classes.divPadre}>
            <div className={classes.control}>
                <button className= {classes.boton} onClick={increment}>+</button>
                <h1 className={classes.numero}>{quantity}</h1>
                <button className= {classes.boton} onClick={decrement}>-</button>
            </div>
            <div className={classes.cantidad}>
                <button className= {classes.botonCantidad} onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount