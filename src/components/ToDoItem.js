function ToDoItem ({task,removeTask,edit, key, toggle}) {

  const handleRemoveTask = () => {
    removeTask(task.id)
  }

  return (
    <div className='todo-el' id={key}>

      <span 
      className={task.complete ? 'todo-el__text todo-el__text_complete' : 'todo-el__text'}
      onClick={() => toggle(task.id)}
      >
        {task.task}
      </span>

      {/* <button 
      className='todo-el__button'
      type='button'
      onClick={() => edit()}
      >
        EDIT
      </button> */}

      <button 
      className='todo-el__button'
      type='button'
      onClick={handleRemoveTask}
      >
        x
      </button>

    </div>
  )
}

export default ToDoItem;
