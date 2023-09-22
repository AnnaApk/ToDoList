import Form from "./Form";
import api from "../service/firebase";
import { useEffect, useState } from "react";
import EditTaskForm from "./EditTaskForm";

function App() {

  const [tasks, setTasks] = useState(null);
  const [ isEditTask, setIsEditTask ] = useState(false);
  const [ editData, setEditData] = useState(null);

  const dbTasks = () => {
    api.getTasks()
      .then(res => {
        if (res) {
          return Object.entries(res);
        } else return null;
      })
      .then(res => {
        setTasks(res);
      })
      .catch(err => alert(err))
  }

  const addTask = ({task, date}) => {
    if (!task) return alert('пустая задача - считай выполнена')
    const newTask = {
      task,
      date,
      dateAdding: new Date(),
      owner: 'dev',
      isDone: false,
    }
    api.addTask(newTask)
    .then(res => {
      if (res) dbTasks()
    })
    .catch(err => alert(err))
  }

  const removeTask = (id) => {
    api.deleteTask(id)
    .then(res => {
      if (res === null) {
        dbTasks()
      }
    })
    .catch(err => alert(err))
  }

  const openFormEditTask = ({id, task, date, done}) => {
    setIsEditTask(true);
    setEditData({id: id,task: task, date:date, done:done});
  }

  const handleCloseEditForm = () => {
    setIsEditTask(false);
    setEditData(null);
  }

  const handleEditTask = ({taskInput, date}) => {
    const taskId = editData.id
    api.patchTask({id:taskId, task:taskInput, date})
    .then(res => dbTasks())
    .catch(err => alert(err));
    setIsEditTask(false);
    setEditData(null);
  }

  const toggleIsDoneTask = (arg) => {
    let {id, isDone} = arg
    api.patchTask({id, isDone: !isDone})
    .then(res => dbTasks())
    .catch(err => alert(err));
  }

  useEffect(() => {
    dbTasks()
  }, [])

  return (
    <div className="page">
      <h1>To Do List</h1>
      <Form addTask={addTask}/>

      { isEditTask ?
        <EditTaskForm 
          editData={editData}
          handleClose={handleCloseEditForm}
          handleEditTask={handleEditTask}
        /> : <></>
      }

      <ul style={{padding: '0',}}>
        { tasks ?
          tasks.map(([id, {task, date, isDone}]) => {

            console.log('map', !isDone)

            const buttonDone = isDone ? 'AlredyDONE' : 'NotYet'

          return (
            <li key={id} className="task-item">
              <p className="task-item_title"> {task} </p>
              <p>{date ? new Date(date).getFullYear() + '-' + (new Date(date).getMonth() + 1) + '-' + new Date(date).getDate() : '0000-00-00'}</p>
              <button className="button" onClick={() => openFormEditTask({id, task, date})}>EDIT</button>
              <button className="button" onClick={() => toggleIsDoneTask({id, isDone})}>{buttonDone}</button>
              <button className="button" onClick={() => removeTask({id})}>DEL</button>
            </li>
          )
        }) : <></>
      }
      </ul>
    </div>
  )
}

export default App;
