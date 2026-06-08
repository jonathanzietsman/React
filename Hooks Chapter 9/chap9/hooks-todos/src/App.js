import './App.css';
import React, { useReducer } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid'; // generates a guaranteed unique ID for each new todo

const todosInitialState = {
    todos: []
};

function todosReducer(state, action) {
    switch (action.type) {
        // Each case wrapped in {} to give it its own block scope — not in textbook but best practice.
        // Without {}, 'const' variables declared in one case are technically visible in others,
        // which can cause unexpected errors if two cases use the same variable name.
        case 'get': {
            return { ...state, todos: action.payload };
        }
        case 'add': {
            // const newToDo = { id: uuidv4(), text: action.payload }; // new todo: unique id + typed text
            const addedToDos = [...state.todos, action.payload];            // spread existing todos, append new one
            return { ...state, todos: addedToDos };                  // return new state — never mutate directly
        }

        case 'delete': {
            // returns a new array excluding the todo whose id matches the dispatched payload
            const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id);
            return { ...state, todos: filteredTodoState };
        }

        case 'edit': {
            const updatedToDo = { ...action.payload }; // spread payload to get the updated todo (new text, same id)

            // locate the position of the todo being edited
            const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id);

            // rebuild array: all todos before the edited one + updated todo + all todos after it
            const updatedToDos = [
                ...state.todos.slice(0, updatedToDoIndex), // everything before
                updatedToDo,                                // replaced with updated version
                ...state.todos.slice(updatedToDoIndex + 1) // everything after
            ];
            return { ...state, todos: updatedToDos };
        }

        default:
            return todosInitialState; // resets back to the 3 hardcoded starter todos
    }
}

export const TodosContext = React.createContext();

function App() {
    const [state, dispatch] = useReducer(todosReducer, todosInitialState);

    return (
        <TodosContext.Provider value={{ state, dispatch }}>
            <ToDoList />
        </TodosContext.Provider>
    );
}

export default App;







// import logo from './logo.svg';
// import './App.css';
// // import React, { useContext } from 'react';
// // import { UserContext } from './index';
// import React, { useReducer } from 'react';
// import { Button } from 'react-bootstrap';

// const initialState = {
//   count: 0
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       Count: {state.count}

//       <br />

//       <Button onClick ={() => dispatch({type: 'increment'}) }>
//         Increment
//       </Button>

//       <Button variant="secondary" onClick ={() => dispatch({type: 'decrement'}) }>
//         Decrement
//       </Button>

//       <Button variant="success" onClick={() => dispatch({type: 'reset'}) }>
//         Reset
//       </Button>

//     </div>
//   );
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return initialState;
//     default:
//       return initialState;  
//   }
// }


// export default App;
