import React, { useContext, useState } from 'react';
import { TodosContext } from './App';
// Pulling in specific React-Bootstrap elements to compile a modern, clean UI layout
import { Table, Form, Button, Container, Card, Badge } from 'react-bootstrap';

function ToDoList() {
    // Consume the global state and dispatch methods exposed by the TodosContext Provider
    const { state, dispatch } = useContext(TodosContext);

    // --- Local UI States ---
    const [todoText, setTodoText] = useState("");    // Tracks the live text typed into the form input field
    const [editMode, setEditMode] = useState(false); // Flag tracking whether the user is adding a new item or editing an existing one
    const [editTodo, setEditTodo] = useState(null);  // Temporarily stores the raw object reference of the todo being edited

    // Computed property: Dynamically switches UI labels based on current operation mode
    const buttonTitle = editMode ? "Save Edit" : "Add Todo";

    // Clean-up handler: Resets local form elements and returns UI back to standard "Add Mode"
    const handleCancel = () => {
        setEditMode(false);
        setEditTodo(null);
        setTodoText("");
    };

    /**
     * Handles Form Submissions for both Add and Edit processes
     */
    const handleSubmit = event => {
        event.preventDefault(); // Intercepts page reload behavior natively triggered by form submissions

        // Prevent empty entries from cluttering up the list
        if (!todoText.trim()) return;

        if (editMode) {
            // EDIT MODE: Rebuild target todo object with old identifiers, but override text field with local input state
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
            setEditMode(false);
            setEditTodo(null);
        } else {
            // ADD MODE: Pass raw string text directly as the action payload; reducer will handle object formatting
            dispatch({ type: 'add', payload: todoText });
        }

        setTodoText(""); // Explicitly clear input field after structural dispatch processing finishes
    };

    return (
        // Container sets page-margins and restrains wide viewports with a 650px threshold
        <Container className="mt-5" style={{ maxWidth: '650px' }}>

            {/* Card structure encapsulates UI elements into an elevated, unified panel */}
            <Card className="shadow">

                {/* Header view showing real-time tracker data */}
                <Card.Header className="d-flex align-items-center justify-content-between bg-dark text-white py-3">
                    <h5 className="mb-0">📝 My Todos</h5>
                    {/* Dynamic counter updating instantaneously as state.todos list length shifts */}
                    <Badge bg="secondary">{state.todos.length} remaining</Badge>
                </Card.Header>

                {/* Body block dedicated entirely to operations input */}
                <Card.Body>

                    {/* Conditional inline styling adds a visual yellow accent block to signal Edit Mode clearly */}
                    <Form
                        onSubmit={handleSubmit}
                        style={editMode ? { borderLeft: '4px solid #ffc107', paddingLeft: '10px' } : {}}
                    >
                        {/* Dynamic warning subtitle informing the user about the active edit state */}
                        {editMode && (
                            <p className="text-warning mb-2" style={{ fontSize: '0.85rem' }}>
                                ✏️ Editing todo — make your changes and click Save Edit
                            </p>
                        )}

                        {/* Flex container layout keeping form control fields nicely balanced horizontally */}
                        <Form.Group className="d-flex gap-2">
                            <Form.Control
                                type="text"
                                placeholder={editMode ? "Edit your todo..." : "Enter a new todo..."}
                                onChange={event => setTodoText(event.target.value)}
                                value={todoText} // Controlled Input component pattern; guarantees UI strictly reflects state
                            />

                            {/* Color shifts reactively to match context actions (Success=Green, Warning=Yellow) */}
                            <Button type="submit" variant={editMode ? "warning" : "success"}>
                                {buttonTitle}
                            </Button>

                            {/* Cancel Option provided only during active Edit sessions */}
                            {editMode && (
                                <Button variant="outline-secondary" onClick={handleCancel}>
                                    Cancel
                                </Button>
                            )}
                        </Form.Group>
                    </Form>
                </Card.Body>

                {/* Table containment zone; padding set to zero so elements fill layout edges cleanly */}
                <Card.Body className="p-0">

                    <Table striped hover responsive className="mb-0 align-middle">
                        <thead>
                            <tr className="table-dark">
                                <th>Task</th>
                                {/* Standardizing column widths prevents resizing jitter when text changes */}
                                <th className="text-center" style={{ width: '90px' }}>Edit</th>
                                <th className="text-center" style={{ width: '100px' }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.todos.length > 0 ? (
                                // Render row mapping if items populate our todos array
                                state.todos.map(todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.text}</td>

                                        <td className="text-center">
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                onClick={() => {
                                                    setEditMode(true);
                                                    setEditTodo(todo);
                                                    setTodoText(todo.text); // Pre-fills input text field with existing task description
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        </td>

                                        <td className="text-center">
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => dispatch({ type: 'delete', payload: todo })}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                // Clean, empty fallback message displayed when all tasks have been completed/deleted
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