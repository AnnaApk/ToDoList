import { useState } from "react";
import { DatePicker, Input } from 'antd';

import SelectList from "./SelectList";

export default function Form ({addTask}) {

  const [taskInput, setTaskInput] = useState('');
  const [date, setDate] = useState(null);

  const handleTaskChange = (e) => {
    setTaskInput((e.currentTarget.value))
  }

  const handleAdding = (e) => {
    e.preventDefault();
    addTask({task: taskInput, date});
    setTaskInput('');
    setDate(null);
  }

  return (
    <form className="form">

      <Input 
        placeholder="task" 
        onChange={handleTaskChange} 
        value={taskInput} 
        className="edit-form_field"  
      />

      <DatePicker 
        onChange={(date) => setDate(date ? date : null)} 
        className="edit-form_field"
        // value={date}
      />

      <SelectList />

      <button className="button" onClick={handleAdding} type="Submit"> ADD TASK </button>

    </form>
  )
}