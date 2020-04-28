import React from 'react'

const ToDoForm = () => {
 
  return (
    <form  className="form">
      <input
        type="text"
        placeholder="Add ToDo..."
        required
        className="ToDo-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-ToDo-btn">
            Add To Do
        </button>
        <button className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  )
}

export default ToDoForm
