import Form from "./Form";

import api from "../service/firebase";
import { useEffect, useState } from "react";

function App() {

  const [tasks, setTasks] = useState(null);

  const dbTasks = () => {
    api.getTasks()
      .then(res => {
        //console.log(res.status)
        if (res) {
          return Object.entries(res);
        } else return null;
      })
      .then(res => {
        setTasks(res);
        //console.log('data', res)
        //console.log('--------tasks', tasks)
      })
      .catch(err => alert(err + '19'))
  }

  const addTask = ({task, date}) => {
    if (!task) return alert('пустая задача - считай выполнена')
    const newTask = {
      task,
      date,
      dateAdding: new Date(),
      owner: 'dev',
      done: false,
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
      //console.log(res.headers)
      if (res === null) {
        dbTasks()
      }
    })
    .catch(err => alert(err))
  }

  const editTask = (id) => {

  }

  useEffect(() => {
    dbTasks()
  }, [])

  return (
    <div className="page">
      <h1>To Do List</h1>
      <Form addTask={addTask}/>
      <ul>
        { tasks ?
          tasks.map(([id, {task, date, done}]) => {
          return (
            <li key={id} className="task-item">
              <p className="task-item_title"> {task} </p>
              <p>{date ? date : '0000-00-00'}</p>
              <button className="button" onClick={() => editTask({id})}>EDIT</button>
              <button className="button" onClick={() => done = !done}>DONE</button>
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
