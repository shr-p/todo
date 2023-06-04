import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit, handleCheck }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <input type="checkbox" style={{width:"20px"}} onChange={()=> handleCheck(t.id)}></input>
          <span id="{t.id}" className="todoText" key={t.id} >
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
