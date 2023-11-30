import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";

export function Content() {

  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
         console.log("handleIndexProducts");
         axios.get("http://localhost:3000/products.json").then((response) => {
           console.log(response.data);
           setProducts(response.data);
         });
       };
  
  
  useEffect(handleIndexProducts, []);     
       
  return (
    <main>
      <Signup />
      <ProductsIndex products={products}/>
    </main>
  );
}
