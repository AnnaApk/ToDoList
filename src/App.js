import ToDoInput from './components/ToDoInput';
import ToDoItem from './components/ToDoItem';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (task) => {
    if (task) {
      const newTask = {
        id: Math.random().toString(36).substring(2,9),
        task: task,
        complete: false,
      }
      setToDoList([...toDoList, newTask])
    }
  }

  const removeTask = (id) => {
    setToDoList([...toDoList.filter((el) => el.id !== id)]);
  }

  const editTask = () => {

  }

  const toggle = (id) => {
    setToDoList([...toDoList.map(el => el.id === id ? {...el, complete: !el.complete} : {...el})])
  }

  return (
    <div className='page'>
      <ToDoInput addTask={addTask} />
      <div className='todo-list'>
        {toDoList.map((el) => {
          return (
            <ToDoItem removeTask={removeTask} edit={editTask} task={el} key={el.id} toggle={toggle} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
