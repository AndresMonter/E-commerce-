import React from 'react'
import {Link} from "react-router-dom"

 function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="/">
                        E-COMMERCE DEV.F
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                            </Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/productos">
                                Productos
                            </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/sobrenosotros">
                                    Sobre Nosotros
                            </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contactanos">
                                    Contactanos
                            </Link>
                            </li>                            
                        </ul>
                        <div className='buttons'>
                            <Link to="/Iniciar-sesion" className="btn btn-outline-dark">
                              <i className="fa fa-sign-in me-1"></i>Iniciar Sesion</Link>

                              <Link to="/Registrarse" className="btn btn-outline-dark ms-2">
                              <i className="fa fa-user-plus me-1"></i>Registrate</Link>

                              <Link to="/cart" className="btn btn-outline-dark ms-2">
                              <i className="fa fa-shopping-cart me-1"></i>Carrito</Link>
                        </div>
                        

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;