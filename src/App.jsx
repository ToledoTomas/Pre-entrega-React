import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
// import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div>
     <NavBar />
     <ItemListContainer props= {'Bienvenido a su librería'}/>
    </div>
  )
}

export default App
