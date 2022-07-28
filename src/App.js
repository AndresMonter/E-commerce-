import './App.css';
import Home from './componentes/Home';
import Navbar from './componentes/Navbar';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Productos from './componentes/Productos';
import Producto from './componentes/Producto';

function App() {
  return (
    <BrowserRouter> 
          
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/productos/:_id' element={<Producto/>} />
          </Routes>
          
          
   </BrowserRouter>
  );
}

export default App;
