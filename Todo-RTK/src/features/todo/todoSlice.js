import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, todoMsg } = action.payload;

      const todo = state.todos.find((t) => t.id === id);

      if (todo) todo.text = todoMsg;
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
