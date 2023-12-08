import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("https://mini-capstone-api-tqv6.onrender.com/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <main>
      <Signup />
      <Login />
      <ProductsIndex products={products} />
    </main>
  );
}
