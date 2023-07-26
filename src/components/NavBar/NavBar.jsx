import { Carrito } from './CartWidget'
import './NavBar.css'
import './CartWidget.css'

export const NavBar = () => {
  return <div>
    <nav className="navbar navbar-expand-lg barra">
      <div className="container-fluid">
      <img src="https://tiendadeco.netlify.app/img/LogoTiendaDeco.jpg" className='imagen' alt="" />
        <div className="collapse navbar-collapse lugar letra" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Bibliotecas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Camas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Escritorios</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Sillas</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Sillones</a>
            </li> 
          </ul>
        </div>
        <ul>
          <li className="nav-item carritoCompras">
            <Carrito/>   
          </li>  
        </ul>
      </div>
    </nav>
    </div>;
}