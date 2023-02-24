import { useState } from "react"

export const AddCategory = () => {
  const [inputBrowse, setinputBrowse] = useState('')

  const onInputBrowse = ({target}) => {
    console.log(target.value);
    setinputBrowse(target.value);
  }

  const onSubmitInfo = ({event}) => {
    event.preventDefault();
    console.log(inputBrowse);
  }

  return (
    <form onSubmit={(event) => onSubmitInfo(event)}>
      <input type="text"
      placeholder="Browse gifs" 
      value={inputBrowse}
      onChange={onInputBrowse}/>
    </form>
  )
}
