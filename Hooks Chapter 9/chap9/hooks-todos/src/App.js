import './App.css';
import React, { useReducer } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid'; // Generates a guaranteed unique ID for each new todo

// 1. INITIAL STATE
// Defines the starting structure of our application state.
const todosInitialState = {
    todos: []
};

// 2. REDUCER FUNCTION
// A pure function that takes the current state and an action, then returns a brand-new state object.
// It manages all state mutations safely without directly changing the original state history.
function todosReducer(state, action) {
    switch (action.type) {
        // Each case is wrapped in curly braces {} to give it its own block scope.
        // This prevents variables declared inside a case (like 'updatedToDos') from bleeding into other cases.
        
        case 'get': {
            // Populates the state with todos fetched from the API backend
            return { ...state, todos: action.payload };
        }
        
        case 'add': {
            // Spreads the existing todos array and appends the new todo item received in the payload
            const addedToDos = [...state.todos, action.payload];            
            return { ...state, todos: addedToDos };                  
        }

        case 'delete': {
            // Filters out the specific todo whose ID matches the payload's ID, leaving all others intact
            const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id);
            return { ...state, todos: filteredTodoState };
        }

        case 'edit': {
            // Spreads payload to create a new object containing the updated text but retaining the same ID
            const updatedToDo = { ...action.payload }; 

            // Finds the precise index position of the todo being edited within the array
            const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id);

            // Rebuilds the state array non-destructively:
            // Combines everything before the edited todo + the updated todo + everything after it
            const updatedToDos = [
                ...state.todos.slice(0, updatedToDoIndex), 
                updatedToDo,                                
                ...state.todos.slice(updatedToDoIndex + 1) 
            ];
            return { ...state, todos: updatedToDos };
        }

        default:
            // Fallback safety net. Returns the original state structure if an unknown action type is dispatched.
            return todosInitialState; 
    }
}

// 3. CONTEXT CREATION
// Creates a context object that will be used to pass the global state and dispatch function down the component tree.
export const TodosContext = React.createContext();

function App() {
    // Initializes useReducer with our reducer function and its baseline initial state
    const [state, dispatch] = useReducer(todosReducer, todosInitialState);

    return (
        // Provider wrapper makes 'state' and 'dispatch' accessible to any nested component (like ToDoList)
        // without manually passing them down via props (Props Drilling).
        <TodosContext.Provider value={{ state, dispatch }}>
            <ToDoList />
        </TodosContext.Provider>
    );
}

export default App;