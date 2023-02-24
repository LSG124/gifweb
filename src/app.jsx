import { useState } from "react";
import { AddCategory } from "./components/addCategory";

export default function App() {
  const [categories, setcategories] = useState(['dragonball']);
  console.log(categories);

  function agregar(texto){
    //console.log(texto);
    if(categories.includes(texto))return;
    setcategories([texto,...categories]);
    //categories.push(texto);
  }

  return (
    <>
    <h1>Gif web app</h1>
    
    <AddCategory onCategories={agregar}/>

    <ol>
        {
        categories.map(
            categorie => {
                return <li key={categorie}>{categorie}</li>
            }
        )}
    </ol>
    </>
  )
}
