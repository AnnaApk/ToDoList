
import { useState } from "react";

function ToDoInput ({addTask}) {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.currentTarget.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    addTask(input)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask(e)
    }
  }

  return (
    <form className='form'>
      <input
      className='form__input'
      type='text'
      onChange={handleChange}
      value={input}
      onKeyDown={handleKeyDown}
      />
      <button className='form__button' type='button' onClick={handleAddTask}>ADD</button>
    </form>
  )
}

export default ToDoInput;
