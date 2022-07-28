import axios from 'axios';
import React, {useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import {Link} from "react-router-dom"


    function Productos() {

   const [data, setData] = useState([]);
   const [filter, setFilter]= useState(data);
   const [loading, setLoading]= useState(false);
   const [componentMounted, setComponentMounted] = useState(true)

   useEffect(()=> {     
        const getProducts = async ()=> {
            setLoading(true);
            const url = ("https://ecomerce-master.herokuapp.com/api/v1/item");
            const result = await axios.get(url)

            if(componentMounted) {
                setData(result.data)
                setFilter(result.data);     
                setLoading(false);                   
                productosFiltrados();    
             
            }
            return ()=> {
                setComponentMounted(false); 
            }
        }
         
        getProducts();
        //eslint-disable-next-line
   },[]);


   const Loading = ()=> {
    return(
        <>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
        </>
    )
 }

 const filterProduct=(cat ) => {
    const updatedList = data.filter((x)=> x.category === cat);
    setFilter(updatedList);  
 }

 
 const productosFiltrados = (long) => {
    const productosFiltraditos = data.filter(long => long.image !== data.image )
     setFilter(productosFiltraditos)
 }

 
 const productosFiltradosImages = (images) => {
    const productosFiltradosImg = data.filter(images => images.images !== data.images)
    setFilter(productosFiltradosImg)
 }



 const ShowProducts = ()=> {
      return (
        <>
              <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
              <button className="btn btn-outline-dark me-2" onClick={()=> setFilter(data) && productosFiltrados(data) && productosFiltradosImages(data) }>Todos</button>
                  <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("Electronics")&& productosFiltrados(data) &&productosFiltradosImages(data)}>Electronics</button>

                  <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("Sports") && productosFiltrados(data)}>Sports</button>
                  <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("Kids")&& productosFiltrados(data) }>Kids</button>              
              </div>
             {filter.map((producto)=> {                
                    return  (
                        <>
                            <div className="col-md-3 mb-4" >
                                <div class="card h-100 text-center p-4" key={producto._id}>
                                    <img src= {producto.image}class="card-img-top" alt={producto.description}height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{producto.product_name.substring(0,12)}</h5>
                                        <p class="card-text lead fw-bold">
                                            ${producto.price}
                                        </p>
                                        <Link to={`/productos/${producto._id}`} class="btn btn-dark"> Comprar </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
             })}
        </>
      )
     
 }



  return (
    <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Nuevos Productos</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading/> : <ShowProducts/> }
                </div>
            </div>
    </div>
  )
}

export default Productos;


