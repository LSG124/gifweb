import { useState } from "react";
import { AddCategory } from "./components/addCategory";

export default function App() {
  const [categories, setcategories] = useState(['dragonball']);
  console.log(categories);

  function agregar(){
    var texto = document.getElementById("texto").value;
    setcategories([...categories, texto]);
    setcategories([texto,...categories]);
  }

  return (
    <>
    <h1>Gif web app</h1>
    
    <AddCategory/>

    <ol>
        {
        categories.map(
            categorie => {
                return <li key={categorie}>{categorie}</li>
            }
        )}
    </ol>
    <input type="text" id="texto" />
    <button className="btnagregar" onClick={agregar}>Agregar botón</button>
    </>
  )
}
