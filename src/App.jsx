import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Mensaje } from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
    <NavBar/>
    <div>
      <Mensaje mensaje="Bienvenidos a mi E-Commerce"/>
    </div>
    </>
  )
}

export default App