/* eslint-disable no-undef */
import { Carrito } from './CartWidget'
import './NavBar.css'
import './CartWidget.css'
import './ItemListContainer.css'
import { BotonesLista } from './BotonesLista'

export const NavBar = () => {
  return <> <div>
    <nav className="navbar navbar-expand-lg barra">
      <div className="container-fluid">
      <img src="https://tiendadeco.netlify.app/img/LogoTiendaDeco.jpg" className='imagen' alt="" />
      <div className="collapse navbar-collapse lugar letra" id="navbarNav">
        <BotonesLista rubro="Bibliotecas"/>
        <BotonesLista rubro="Camas"/>
        <BotonesLista rubro="Escritorios"/>
        <BotonesLista rubro="Sillas"/>
        <BotonesLista rubro="Sillones"/>
      </div>
        <Carrito items={0}/>  
      </div>
    </nav>
    </div></>
}