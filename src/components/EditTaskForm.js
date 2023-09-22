import { useState } from "react";
import { DatePicker, Input } from 'antd';

import SelectList from "./SelectList";

export default function EditTaskForm ({editData, handleClose, handleEditTask}) {

  const [taskInput, setTaskInput] = useState(editData.task);
  const [date, setDate] = useState(editData.date);

  const handleTaskChange = (e) => {
    setTaskInput(e.currentTarget.value)
  }

  return (
    <div className="container">
      <form  className="edit-form form">
        <Input 
          placeholder="task" 
          onChange={handleTaskChange} 
          value={taskInput} 
          className="edit-form_field"
        />

        <DatePicker 
          onChange={(date) => setDate(date ? date : null)} 
          placeholder={date ? new Date(date).getFullYear() + '-' + new Date(date).getMonth() + '-' + new Date(date).getDate() : null}
          className="edit-form_field"
        />

        <SelectList />

        <button 
          className="button" 
          onClick={(e)=> {e.preventDefault(); handleEditTask({taskInput, date})}} 
          type="Submit">
          ACCEPT CHANGE
        </button>

        <button 
          className="button" 
          onClick={(e)=> {e.preventDefault(); handleClose()}}>
          CLOSE
        </button>
        
    </form>
    </div>
  )
}