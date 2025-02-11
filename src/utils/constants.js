import { v4 as uuidv4 } from "uuid";

export const users = [
  { name: "Ashish", age: 25, id: uuidv4() },
  { name: "Rahul", age: 30, id: uuidv4() },
  { name: "User 2", age: 25, id: uuidv4() },
  { name: "User 3", age: 25, id: uuidv4() },
  { name: "User 4", age: 25, id: uuidv4() },
];

export const TodoStatus = {
  todo: { title: "TODO", value: "todo" },
  inprogress: { title: "IN PROGRESS", value: "inprogress" },
  completed: { title: "COMPLETED", value: "completed" },
};
