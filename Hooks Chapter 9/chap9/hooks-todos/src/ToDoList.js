import React, { useContext, useState, useEffect } from 'react';
import { TodosContext } from './App';
// Import structural and styling components from React-Bootstrap
import { Table, Form, Button, Container, Card, Badge } from 'react-bootstrap';
import useAPI from './useAPI'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function ToDoList() {
    // Consumes global state and dispatch capabilities from our App-level Context
    const { state, dispatch } = useContext(TodosContext);

    // LOCAL STATE MANAGEMENT (UI Specific State)
    const [todoText, setTodoText] = useState("");    // Tracks live text input from the user form
    const [editMode, setEditMode] = useState(false); // Flags whether the form is in "Add" or "Edit" mode
    const [editTodo, setEditTodo] = useState(null);  // Stores the complete todo object currently being edited

    // Dynamically adjusts button copy based on the current form operation state
    const buttonTitle = editMode ? "Save Edit" : "Add Todo";

    // API ENDPOINT CONFIGURATION
    const endpoint = "http://localhost:3000/todos"
    const savedTodos = useAPI(endpoint) // Custom hook triggers a GET request to harvest DB data

    // Synchronization Hook: Whenever the database payload updates, update our Reducer's global state
    useEffect(() => {
        dispatch({ type: 'get', payload: savedTodos });
    }, [savedTodos]);


    // Form cleanup tool that clears UI state and terminates editing operations gracefully
    const handleCancel = () => {
        setEditMode(false);
        setEditTodo(null);
        setTodoText("");
    };

    // FORM SUBMISSION HANDLER
    const handleSubmit = async event => {
        event.preventDefault(); // Blocks default HTML page refresh behavior on form submit

        if (editMode) {
            // OPTION A: EDIT MODE ACTIVE
            // 1. Issues a persistent PATCH request to modify the specific todo item text inside db.json
            await axios.patch(`${endpoint}/${editTodo.id}`, {text: todoText})
            
            // 2. Synchronizes our local UI state view by dispatching the update payload to the Reducer
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
            
            // 3. Clear application UI editing flags
            setEditMode(false);
            setEditTodo(null);
        } else {
            // OPTION B: ADD MODE ACTIVE
            // 1. Constructs a standard new todo object structure with a unique UUID
            const newToDo = {id: uuidv4(), text: todoText}
            
            // 2. Persists the item directly to the mock backend DB via an asynchronous POST request
            await axios.post(endpoint, newToDo)
            
            // 3. Appends the new item to the user's interface state
            dispatch({ type: 'add', payload: newToDo });
        }

        setTodoText(""); // Flushes the input input box field empty across both add and edit flows
    };

    return (
        // Centered layout block container wrapped to max out layout at 650px wide
        <Container className="mt-5" style={{ maxWidth: '650px' }}>

            {/* Elevated visual Card panel incorporating depth dropshadows */}
            <Card className="shadow">

                {/* Dark structural header layout displaying an interactive count badge */}
                <Card.Header className="d-flex align-items-center justify-content-between bg-dark text-white py-3">
                    <h5 className="mb-0">📝 My Todos</h5>
                    <Badge bg="secondary">{state.todos.length} remaining</Badge>
                </Card.Header>

                {/* Dynamic user input submission form wrapper area */}
                <Card.Body>
                    {/* Visual UI Assist: Form switches on a left-hand yellow highlight border when editing */}
                    <Form
                        onSubmit={handleSubmit}
                        style={editMode ? { borderLeft: '4px solid #ffc107', paddingLeft: '10px' } : {}}
                    >
                        {/* Inline conditional label helper that signals Edit status context */}
                        {editMode && (
                            <p className="text-warning mb-2" style={{ fontSize: '0.85rem' }}>
                                ✏️ Editing todo — make your changes and click Save Edit
                            </p>
                        )}

                        {/* Flexbox container group grouping input text box side-by-side with buttons */}
                        <Form.Group className="d-flex gap-2">
                            <Form.Control
                                type="text"
                                placeholder={editMode ? "Edit your todo..." : "Enter a new todo..."}
                                onChange={event => setTodoText(event.target.value)}
                                value={todoText} // Controlled element binding: React state drives input display text value
                            />

                            {/* Dynamically shifts color schemes: success (green) for adding items, warning (yellow) for editing */}
                            <Button type="submit" variant={editMode ? "warning" : "success"}>
                                {buttonTitle}
                            </Button>

                            {/* Conditional rendering: Render Cancel action asset only if user is actively editing */}
                            {editMode && (
                                <Button variant="outline-secondary" onClick={handleCancel}>
                                    Cancel
                                </Button>
                            )}
                        </Form.Group>
                    </Form>
                </Card.Body>

                {/* Main Data Presentation Area - Table elements sit flush with Card side borders */}
                <Card.Body className="p-0">
                    <Table striped hover responsive className="mb-0 align-middle">
                        <thead>
                            <tr className="table-dark">
                                <th>Task</th>
                                <th className="text-center" style={{ width: '90px' }}>Edit</th>
                                <th className="text-center" style={{ width: '100px' }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.todos.length > 0 ? (
                                // Map Loop: Converts array elements into corresponding HTML table rows
                                state.todos.map(todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.text}</td>

                                        {/* EDIT COLUMN */}
                                        <td className="text-center">
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                onClick={() => {
                                                    setEditMode(true);          // Turn on editing panel flag
                                                    setEditTodo(todo);          // Pin target object reference
                                                    setTodoText(todo.text);     // Direct target text into text input box
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        </td>

                                        {/* DELETE COLUMN */}
                                        <td className="text-center">
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={async () => {
                                                    // 1. Erase item from remote json data file using targeted DELETE request
                                                    await axios.delete(`${endpoint}/${todo.id}`)
                                                    // 2. Wipe item data from state array to update screen
                                                    dispatch({type: 'delete', payload:todo})
                                                }}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                // EMPTY STATE FALLBACK
                                // Renders dynamically when the todos collection length reaches 0 items
                                <tr>
                                    <td colSpan="3" className="text-center text-muted py-4">
                                        🎉 All done! No todos remaining.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body>

            </Card>
        </Container>
    );
}

export default ToDoList;