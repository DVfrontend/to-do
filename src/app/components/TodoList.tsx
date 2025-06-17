"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToDo {
  id: number;
  text: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("todo");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      alert("Please enter your task in the field before adding");
      return;
    }
    const newTodo: ToDo = {
      id: Date.now(),
      text: inputValue.trim(),
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My To Do List</h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="New task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-xl shadow-md font-semibold"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-xl shadow-sm"
            >
              <span className="text-gray-800 dark:text-white">{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded-2xl shadow font-medium"
              >
                Delete
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};
