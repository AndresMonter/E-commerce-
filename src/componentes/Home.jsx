import React from 'react'
import Productos from './Productos'

function Home() {
    return (
        <div classNameName='hero' >
            <div className="card text-bg-dark border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NUEVOS PRODUCTOS LLEGAN! </h5>
                    <p className="card-text lead fs-2">
                         CONOCE MAS ACERCA DE LOS NUEVOS PRODUCTOS
                    </p>
                    </div>
                   
                   
                </div>
            </div>

            <Productos/>

        </div>
    )
}

export default Home;