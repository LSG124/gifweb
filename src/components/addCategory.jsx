import { useState } from "react"

export const AddCategory = ({onCategories}) => {
  const [inputBrowse, setinputBrowse] = useState('')

  const onInputBrowse = ({target}) => {
    setinputBrowse(target.value);
  }

  const onSubmitInfo = (event) => {
    event.preventDefault();
    if(inputBrowse.trim().length <=1) return;
    //onCategories(categories => [inputBrowse,...categories]);
    onCategories(inputBrowse.trim());
    setinputBrowse('');
  }

  return (
    <form onSubmit={onSubmitInfo}>
      <input type="text"
      placeholder="Browse gifs" 
      value={inputBrowse}
      onChange={(onInputBrowse)}/>
    </form>
  )
}
