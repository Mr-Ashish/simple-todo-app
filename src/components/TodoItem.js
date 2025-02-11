import React from "react";
import { TodoStatus } from "../utils/constants";

const completedStyle = {
  fontStyle: "italic",
  color: "#d35e0f",
  opacity: 0.4,
  textDecoration: "line-through",
};

const TodoItem = React.memo((props) => {
  const { todo, handleCheckBoxClick, deleteTodoProps, handleStatusChange } =
    props;
  const { completed, id, title, user, status } = todo;

  const onStatusChange = (e) => {
    handleStatusChange(todo, e.target.value);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCheckBoxClick(id)}
      />
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
      <span className="assignedUser">-{user ? user.name : "unassigned"}</span>
      <select
        name="selectedUser"
        id="user-select"
        onChange={onStatusChange}
        value={status.value}
      >
        <option value="">--User--</option>
        {Object.keys(TodoStatus).map((key, index) => (
          <option key={key} value={TodoStatus[key].value}>
            {TodoStatus[key].title}
          </option>
        ))}
      </select>
    </li>
  );
});

export default TodoItem;
