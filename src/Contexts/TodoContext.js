import React, { createContext, useContext } from 'react'

export const TodoContext = createContext(   // Creating a Context for Todo management
    {
        todos: [
            { id: 1, todo: 'Sample Todo', completed: false }, // Example todo item
        ],
        addTodo: (todo,id) => {},   // Function to add a new todo
        updateTodo: (todo, id) => {},      // Function to update an existing todo
        toggleComplete: (id) => {}, // Function to toggle the completion status of a todo
        deleteTodo: (id) => {},  // Function to delete a todo
    }
);


export const useTodo = () => {
    return useContext(TodoContext);     // Custom hook to use the TodoContext
}

export const TodoProvider = TodoContext.Provider // Exporting the Provider component of the TodoContext