import { useState } from "react";
import { DatePicker, Input } from 'antd';

import SelectList from "./SelectList";

export default function Form ({addTask}) {

  const [taskInput, setTaskInput] = useState('');
  const [date, setDate] = useState(null);

  const handleTaskChange = (e) => {
    setTaskInput(e.currentTarget.value)
  }

  const handleAdding = (e) => {
    e.preventDefault();
    addTask({task: taskInput, date});
    setTaskInput('');
    setDate(null);
  }

  return (
    <form>

      <Input placeholder="task" onChange={handleTaskChange} value={taskInput} />

      <DatePicker 
        onChange={(date) => setDate(date ? date.format('YYYY-MM-DD') : null)} 
        // value={date}
      />

      <SelectList />

      <button className="button" onClick={handleAdding} type="Submit"> ADD </button>

    </form>
  )
}