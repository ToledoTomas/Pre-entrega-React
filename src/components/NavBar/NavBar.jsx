import classes from './NavBar.module.css'
import logoEcommerce from './assets/logoEcommerce.svg'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>

        <a href="#"><img src={logoEcommerce} alt="Logo ecommerce" /></a>

        <section>

            <Button label={'Home'} handleClick={()=>console.log('Hiciste click en Home')}/>

             <Button label={'About me'} handleClick={()=>console.log('Hiciste click en About me')}/>

             <Button label={'Contact'} handleClick={()=>console.log('Hiciste click en Contact')}/>

        </section>
        
        <div>
            <CartWidget />
        </div>
         
        </nav>
    )
}

export default NavBar