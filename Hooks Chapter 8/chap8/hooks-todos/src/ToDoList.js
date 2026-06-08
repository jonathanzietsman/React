import React, { useContext, useState } from 'react';
import { TodosContext } from './App';
// Container, Card, Badge added for layout and visual polish — not in textbook
import { Table, Form, Button, Container, Card, Badge } from 'react-bootstrap';

function ToDoList() {
    const { state, dispatch } = useContext(TodosContext);

    const [todoText, setTodoText] = useState("");    // stores current value of the text input
    const [editMode, setEditMode] = useState(false); // toggles between add and edit mode
    const [editTodo, setEditTodo] = useState(null);  // holds the todo object currently being edited

    // Dynamically changes the submit button label based on current mode — from textbook
    const buttonTitle = editMode ? "Save Edit" : "Add Todo";

    // Resets form and exits edit mode — not in textbook, added for usability
    const handleCancel = () => {
        setEditMode(false);
        setEditTodo(null);
        setTodoText("");
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (editMode) {
            // spread editTodo to preserve id and completed fields, then override text with new input
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
            setEditMode(false);
            setEditTodo(null);
        } else {
            dispatch({ type: 'add', payload: todoText });
        }

        setTodoText(""); // clears the input after either an add or edit
    };

    return (
        // Container + maxWidth: centers content and stops it stretching full-screen — not in textbook
        <Container className="mt-5" style={{ maxWidth: '650px' }}>

            {/* Card + shadow: groups form and table into one lifted panel — not in textbook */}
            <Card className="shadow">

                {/* Dark header bar with live todo count — not in textbook */}
                <Card.Header className="d-flex align-items-center justify-content-between bg-dark text-white py-3">
                    {/* mb-0 removes default heading bottom margin so it stays vertically centred */}
                    <h5 className="mb-0">📝 My Todos</h5>
                    {/* Badge updates live as todos are added/deleted */}
                    <Badge bg="secondary">{state.todos.length} remaining</Badge>
                </Card.Header>

                {/* Form section — Card.Body provides padding around the form — not in textbook */}
                <Card.Body>

                    {/* Yellow left border signals to the user they are in edit mode — not in textbook */}
                    <Form
                        onSubmit={handleSubmit}
                        style={editMode ? { borderLeft: '4px solid #ffc107', paddingLeft: '10px' } : {}}
                    >
                        {/* Small hint label that only appears during edit mode — not in textbook */}
                        {editMode && (
                            <p className="text-warning mb-2" style={{ fontSize: '0.85rem' }}>
                                ✏️ Editing todo — make your changes and click Save Edit
                            </p>
                        )}

                        {/* d-flex + gap-2: places input and buttons side by side — not in textbook */}
                        <Form.Group className="d-flex gap-2">
                            <Form.Control
                                type="text"
                                placeholder={editMode ? "Edit your todo..." : "Enter a new todo..."}
                                onChange={event => setTodoText(event.target.value)}
                                value={todoText} // controlled input — ensures field clears after submit (BUG FIX: was missing)
                            />

                            {/* Button colour changes with mode: green for add, yellow for edit — not in textbook */}
                            <Button type="submit" variant={editMode ? "warning" : "success"}>
                                {buttonTitle}
                            </Button>

                            {/* Cancel button only renders during edit mode — not in textbook */}
                            {editMode && (
                                <Button variant="outline-secondary" onClick={handleCancel}>
                                    Cancel
                                </Button>
                            )}
                        </Form.Group>
                    </Form>
                </Card.Body>

                {/* p-0 removes Card inner padding so the table sits flush against the card edges — not in textbook */}
                <Card.Body className="p-0">

                    {/* striped: alternating row shading; hover: highlights row on mouseover;
                        responsive: horizontal scroll on small screens instead of overflowing;
                        mb-0: removes default table bottom margin;
                        align-middle: vertically centres all cell content */}
                    <Table striped hover responsive className="mb-0 align-middle">
                        <thead>
                            {/* table-dark: dark header row separates headings from data rows — not in textbook */}
                            <tr className="table-dark">
                                <th>Task</th>
                                {/* Fixed widths prevent Edit/Delete columns from expanding unnecessarily — not in textbook */}
                                <th className="text-center" style={{ width: '90px' }}>Edit</th>
                                <th className="text-center" style={{ width: '100px' }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.todos.length > 0 ? (
                                state.todos.map(todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.text}</td>

                                        {/* text-center: keeps button centred in the fixed-width column — not in textbook */}
                                        <td className="text-center">
                                            {/* Proper Button replaces plain text — not in textbook */}
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                onClick={() => {
                                                    setEditMode(true);
                                                    setEditTodo(todo);
                                                    setTodoText(todo.text); // pre-fills input with existing text — not in textbook
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        </td>

                                        {/* text-center: keeps button centred in the fixed-width column — not in textbook */}
                                        <td className="text-center">
                                            {/* Proper Button replaces plain text — not in textbook */}
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
                                // Empty state row shown when all todos are deleted — not in textbook
                                // colSpan="3" spans all columns; py-4 adds breathing room; text-muted softens colour
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