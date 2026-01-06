import React, {  useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './Contexts/TodoContext';
import { TodoForm } from './components';

function App() {
  const [todos, setTodos] = useState([])  // State to hold the list of todos

  // Function to add a new todo

  const addTodo = (todo) => {
    setTodos((prevTodos) => [ { id: Date.now(), ...todo},...prevTodos])   // Add new todo at the beginning of the list  
  }

// Function to update an existing todo by id
  const updateTodo = (id,todo) => {
  setTodos((prev) =>
    prev.map((prevTodos) => (prevTodos.id === id ? todo : prevTodos))  // Update the matching todo
  )
  }

  // Function to remove a todo by id
const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)) // Remove the todo with the matching id
  }

  useEffect(() => { 
    const todos = JSON.parse( localStorage.getItem('todos')) || []; // Retrieve todos from localStorage
    setTodos(todos); // Set the retrieved todos to state
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // Store todos in localStorage whenever they change
  }, [todos]);

// Function to toggle the completion status of a todo by id
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed:!prevTodo.completed}: prevTodo)   // Toggle the completed status
  )
  }

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo,deleteTodo, toggleComplete }}>
 <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full mb-2">
                                <TodoItem todo={todo} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
