import React, {useState,useEffect} from 'react'
import {useParams} from "react-router"
import axios from "axios"
import { Link } from 'react-router-dom'


const Producto = () => {

 const  {_id} = useParams();    
 const  [producto, setProducto] = useState([])
 const  [loading,setLoading] = useState(false);

 useEffect(()=> {
      const getProducto =  ()=> {
        setLoading(true);
          axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${_id}`).then((response)=> {
          setProducto( response.data)
        });   
        setLoading(false);

      }
      getProducto()
 },[])

  const Loading = ()=> {
    return (
        <>
         
        </>
    )
  }

  const ShowProduct= () => {
         return(
            <>
                <div className="col-md-6">
                    <img src={producto.image} alt={producto.description} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {producto.category}
                    </h4>
                    <h1 className='display-5'>{producto.product_name}</h1>
                                
                    <p className='lead fw-bolder'>{producto.description}</p>

                    <h3 className='display-6 fw-bold my-4'>
                        ${producto.price}
                    </h3>

                   <button className='btn btn-outline-dark px-4 py-2'>Añadir al carrito</button>
                   
                   <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
                         Ir a carrito
                   </Link>
                
                
                </div>
            </>
         )
  }



  return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                 {loading ? <loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Producto


//Fetch
// useEffect(() => {
//   const getProducto = async () => {
//     setLoading(true);
//     const response = await fetch(`https://ecomerce-master.herokuapp.com/api/v1/item/${_id}`);
//     setProducto(await response.json());
//     setLoading(false);

//   }
//   getProducto()
// }, [])