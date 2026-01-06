import React, { useState } from 'react'
import { useTodo } from '../Contexts';

function TodoForm() {
    const [inputValue, setInputValue] = useState(''); // State to hold the input value
    const { addTodo } = useTodo() // Access addTodo from context

    const handleSubmit = (e) => {     // Handle form submission
        e.preventDefault();         // Prevent default form submission behavior
        if (!inputValue)  return; // Prevent adding empty todos
        addTodo({ todo: inputValue, completed: false });  // Call addTodo from context
        setInputValue('');      // Clear the input field after adding
    };

    return (
        <form  onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={inputValue}                              // Bind input value to state
                onChange={(e) => setInputValue(e.target.value)} // Update state on input change
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-700 text-green-400 shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

