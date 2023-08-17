import React from 'react'

const Todo = ({text,updateMode,deleteTodo}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <button className="icon" onClick={updateMode}>Update</button>
            <button className="icon" onClick={deleteTodo}>Delete</button>
        </div>
    </div>
  )
}

export default Todo
