import './App.css'
import Saludo from './components/Saludo'
import Card from './components/Card'

import imagen1 from './assets/imagen01.jpg'
import imagen2 from './assets/imagen02.jpg'
import imagen3 from './assets/imagen03.jpg'
import Iteracion from './components/Iteracion'
import Eventos from './components/Eventos'
import Fetching from './components/Fetching'
function App() {
  const articulos = [ {
    nombre : "Chaqueta Bebe",
    descripcion : "Producto para bebe",
    precio : 100000,
    imagen : imagen1,
    disponible : false
  } ,
   {
    nombre :"Esencia Naranja",
    descripcion : "Esencia para aromatizar tus espacios",
    precio : 80000,
    imagen : imagen2,
    disponible : true
  },
  {
    nombre :"Laptop Gris",
    descripcion : "Ideal para aprender programación",
    precio : 1500000,
    imagen : imagen3,
    disponible : true
  },
  {
    nombre : "Chaqueta Bebe",
    descripcion : "Producto para bebe",
    precio : 100000,
    imagen : imagen1,
    disponible : false
  } ,
   {
    nombre :"Esencia Naranja",
    descripcion : "Esencia para aromatizar tus espacios",
    precio : 80000,
    imagen : imagen2,
    disponible : true
  },
  {
    nombre :"Laptop Gris",
    descripcion : "Ideal para aprender programación",
    precio : 1500000,
    imagen : imagen3,
    disponible : true
  } ]
  return (
    <>
    {/* <Saludo mensaje={"Hola desde App"} ></Saludo> */}
    {/* <Card articulo={ articulo } ></Card>
    <Card articulo={ articulo2 } ></Card> */}
    {/* <Iteracion></Iteracion> */}
    {/* <div className='row'>
    {articulos.map((articuloDatos)=> (
      <div className='col-3' >
      <Card key={ articulos.nombre } articulo={articuloDatos}></Card>
      </div>
    ))}
    </div> */}
    <Eventos></Eventos>
    <Fetching></Fetching>*/
    
    </>
  )
}

export default App
