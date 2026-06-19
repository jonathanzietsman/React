import './App.css';
import React, { useReducer } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid'; // Generates a guaranteed unique ID string for each new todo

// Define the baseline state shape for our application
const todosInitialState = {
    todos: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Hooks', completed: false },
        { id: 3, text: 'Build a Todo App', completed: false }
    ]
};

/**
 * Pure reducer function that dictates how state changes in response to dispatched actions.
 * Rule of Reducers: Never mutate state directly; always return a brand-new state object.
 */
function todosReducer(state, action) {
    switch (action.type) {
        
        // Each case block is enclosed in curly braces {} to establish local block-scoping.
        // This prevents variable name collisions (e.g., declaring 'updatedToDos' across different cases).
        
        case 'add': {
            // Create a new todo object combining a unique UUID string with the text from the payload
            const newToDo = { id: uuidv4(), text: action.payload, completed: false }; 
            
            // Create a brand-new array containing all existing items plus our new todo
            const addedToDos = [...state.todos, newToDo];            
            
            // Return a new state object using the spread operator to preserve any other state properties
            return { ...state, todos: addedToDos };                  
        }

        case 'delete': {
            // Filter out the specific todo whose ID matches the incoming action payload ID
            // .filter() naturally returns a brand new array, adhering to React immutability rules
            const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id);
            return { ...state, todos: filteredTodoState };
        }

        case 'edit': {
            // Create a shallow copy of the payload to isolate the modified todo data
            const updatedToDo = { ...action.payload }; 

            // Find the array index of the todo item that we want to update
            const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id);

            // Reconstruct the array immutability without mutating original positions:
            // Slices everything BEFORE the target index + inserts updated item + slices everything AFTER target index
            const updatedToDos = [
                ...state.todos.slice(0, updatedToDoIndex), 
                updatedToDo,                                
                ...state.todos.slice(updatedToDoIndex + 1) 
            ];
            return { ...state, todos: updatedToDos };
        }

        default:
            // Fallback case: If an unrecognized action is sent, reset the state to the initial hardcoded data
            return todosInitialState; 
    }
}

// Initialize and export a React Context to circumvent "prop-drilling".
// This allows deeply nested children to directly access state and dispatch.
export const TodosContext = React.createContext();

function App() {
    // useReducer handles complex state objects. It returns the current state and a dispatch function.
    const [state, dispatch] = useReducer(todosReducer, todosInitialState);

    return (
        // Wrap the child components inside the Provider, exposing the state and dispatch hook globally
        <TodosContext.Provider value={{ state, dispatch }}>
            <ToDoList />
        </TodosContext.Provider>
    );
}

export default App;