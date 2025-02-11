import React, { useState } from "react";
import { users } from "../utils/constants";

const InputTodo = React.memo((props) => {
  const { addTodoProps } = props;
  const [title, setTitle] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps({ title, user: selectedUser });
    setTitle("");
    setSelectedUser("");
  };

  const handleUserSelect = (e) => {
    const todoUser = users.filter((user) => user.id === e.target.value)[0];
    if (todoUser) {
      setSelectedUser(todoUser);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        id="add_todo"
        type="text"
        className="input-text"
        placeholder="Add todo..."
        data-test-id="Add todo"
        value={title}
        name="title"
        onChange={onTitleChange}
      />
      <select
        name="selectedUser"
        id="user-select"
        onChange={handleUserSelect}
        value={selectedUser.id}
      >
        <option value="">--User--</option>
        {users.map((user, index) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        type="submit"
        className="input-submit"
        value="Submit"
        id="submit"
      />
    </form>
  );
});

export default InputTodo;
