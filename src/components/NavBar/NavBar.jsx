import classes from './NavBar.module.css'
import logoEcommerce from './assets/logoEcommerce.svg'
import Button from '../Button/Button'

const NavBar = () => {
    return (
        <nav style={{display:'flex', alignItems:'center', justifyContent: 'flex-start'}}>

        <a href="#"><img style = {{width: '5rem'}}src={logoEcommerce} alt="Logo ecommerce" /></a>

        <section style={{marginLeft: '28rem'}}>

            <Button label={'Home'} handleClick={()=>console.log('Hiciste click en Home')}/>

             <Button label={'About me'} handleClick={()=>console.log('Hiciste click en About me')}/>

             <Button label={'Contact'} handleClick={()=>console.log('Hiciste click en Contact')}/>

        </section>
         
        </nav>
    )
}

export default NavBar