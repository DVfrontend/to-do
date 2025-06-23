"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToDo {
  id: number;
  text: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      alert("Please enter your task in the field before adding");
      return;
    }

    const newTodo: ToDo = {
      id: Date.now(),
      text: trimmed,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 py-12">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          📝 My To-Do List
        </h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
          />
          <button
            onClick={addTodo}
            className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <span className="relative z-10">Add Task</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          </button>
        </div>

        <ul className="space-y-3">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.li
                key={todo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-xl shadow hover:scale-[1.01] hover:shadow-lg transition-transform"
              >
                <span className="text-gray-800 dark:text-white break-all">
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow flex items-center gap-1"
                >
                  🗑️ Delete
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};
