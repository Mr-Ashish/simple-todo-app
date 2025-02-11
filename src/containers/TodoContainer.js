import React, { useCallback, useMemo, useState } from "react";
import TodosList from "../components/TodosList";
import Header from "../components/Header";
import InputTodo from "../components/InputTodo";
import { v4 as uuidv4 } from "uuid";
import { TodoStatus } from "../utils/constants";
import Filters from "../components/Filters";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Setup development environment",
      completed: true,
      status: TodoStatus.completed,
    },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
      status: TodoStatus.todo,
    },
    {
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false,
      status: TodoStatus.todo,
    },
  ]);

  const [appliedFilters, setAppliedFilters] = useState({
    user: "",
  });

  const handleCheckBoxClick = useCallback(
    (id) => {
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      );
    },
    [setTodos]
  );

  const delTodo = useCallback(
    (id) => {
      setTodos((prev) =>
        prev.filter((todo) => {
          return todo.id !== id;
        })
      );
    },
    [setTodos]
  );

  const addTodoItem = useCallback(
    (todoItem) => {
      const newTodo = {
        id: uuidv4(),
        completed: false,
        status: TodoStatus.todo,
        ...todoItem,
      };
      setTodos((prev) => [...prev, newTodo]);
    },
    [setTodos]
  );

  const handleStatusChange = useCallback(
    (todoItem, newStatus) => {
      const mappedStatus = TodoStatus[newStatus];
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === todoItem.id) {
            return { ...todoItem, status: mappedStatus };
          }
          return todo;
        })
      );
    },
    [setTodos]
  );

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (appliedFilters.user) {
        return todo.user?.id === appliedFilters.user;
      }
      return todos;
    });
  }, [todos, appliedFilters]);

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <Filters
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
      <TodosList
        todos={filteredTodos}
        handleCheckBoxClick={handleCheckBoxClick}
        deleteTodoProps={delTodo}
        handleStatusChange={handleStatusChange}
      />
    </div>
  );
};
export default TodoContainer;
