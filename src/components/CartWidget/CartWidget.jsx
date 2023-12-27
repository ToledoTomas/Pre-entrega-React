import classes from './CartWidget.module.css'
import carritoDeCompras from './assets/carritoDeCompras.png'

const CartWidget = () => {
    return (
        <div className={classes.div}>
            <a href="#"><img className={classes.carritoDeCompras} src={carritoDeCompras} alt="Carrito de compras" /></a>
            <h2 className={classes.cantidad}>0</h2>
        </div>
    )
}

export default CartWidget