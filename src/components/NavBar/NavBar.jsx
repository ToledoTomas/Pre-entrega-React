import classes from './NavBar.module.css'
import logoEcommerce from './assets/logoEcommerce.svg'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <Link to='/'>

                <img className={classes.img} src={logoEcommerce} alt="Logo ecommerce" />

            </Link>
        <section>

            <Link to={'/category/Terror'} className={classes.link}>Terror</Link>

            <Link to={'/category/Fantasía'} className={classes.link}>Fantasía</Link>

            <Link to={'/category/Programación'} className={classes.link}>Informática</Link>

        </section>
        
        <div>

            <CartWidget />
            
        </div>
         
        </nav>
    )
}

export default NavBar