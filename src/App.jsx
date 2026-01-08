import React, { useState, useEffect } from 'react'
import { TodoProvider } from './Contexts/TodoContext'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? todo : item))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
    setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] flex items-center justify-center p-4">

        <div className="w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl px-6 py-8 text-white">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center tracking-wide">
            🚀 Smart Todo Manager
          </h1>
          <p className="text-center text-gray-300 mt-2 mb-8 text-sm">
            Stay productive. Stay organized.
          </p>

          {/* Todo Form */}
          <div className="mb-6">
            <TodoForm />
          </div>

          {/* Todo List */}
          <div className="space-y-3">
            {todos.length === 0 ? (
              <p className="text-center text-gray-400 text-sm">
                No tasks yet. Add your first todo ✨
              </p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <TodoItem todo={todo} />
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </TodoProvider>
  )
}

export default App
