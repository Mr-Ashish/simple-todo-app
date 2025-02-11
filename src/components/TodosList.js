import React from "react";
import TodoItem from "./TodoItem";

const TodosList = React.memo((props) => {
  const { todos, handleCheckBoxClick, deleteTodoProps, handleStatusChange } =
    props;
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheckBoxClick={handleCheckBoxClick}
          deleteTodoProps={deleteTodoProps}
          handleStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
});

export default TodosList;
