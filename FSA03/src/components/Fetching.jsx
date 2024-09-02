import { useState } from "react";

function Fetching(){
    const[products, setproducts] = useState([])
    //fetch("https://dog.ceo/api/breeds/image/random")
    fetch ("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then (dog =>{ console.log(dog)
    setproducts(dog)
})
return (<>
        {products.map((product) =>(
            <div> {product.category}   </div>)
        )}
</>)
}
export default Fetching