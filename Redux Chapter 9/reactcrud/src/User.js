import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Table, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props);
        // Track visual popovers, structured array datasets, and targeted objects inside local state
        this.state = {
            users: [],
            showDeleteDialog: false,
            selectedUser: {}
        };
        // Explicit binding context assignments ensuring 'this' functions correctly inside DOM event listeners
        this.add = this.add.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
        this.delete = this.delete.bind(this);
    }

    // Lifecycle trigger initializing connection directly on initial view element mounting phase
    componentDidMount() {
        /*
          .on('value', ...) attaches an open, real-time sync subscription listener.
          Any changes directly present inside the backend database instance trigger this 
          callback stream on demand to fetch a fresh remote snapshot object copy.
        */
        firebase.database().ref('/')
            .on('value', snapshot => {
                let returnArr = [];
                
                // Loops through each child node item present inside the payload collection package
                snapshot.forEach(data => {
                    let user = data.val(); // Pulls the nested JavaScript values dictionary
                    user['key'] = data.key; // Merges the generated push key identifier onto the object literal map
                    returnArr.push(user);
                });
                
                // Triggers local component re-rendering by committing compiled updates straight into state
                this.setState({
                    users: returnArr
                })
            });
    }

    // Navigates programmatically to the creation element interface
    add(e) {
        // Uses properties populated straight through the legacy router element tracking package context
        this.props.history.push("/add");
    }

    // Opens the dialog confirmation flow window component while tracking targeted subject context
    openDeleteDialog(user) {
        this.setState({
            showDeleteDialog: true,
            selectedUser: user
        });
    }

    // Resets visibility flags and clear focus reference target values safely
    closeDeleteDialog() {
        this.setState({
            showDeleteDialog: false,
            selectedUser: {}
        });
    }

    // Executes remote persistence removal call routines using unique references
    delete(e) {
        // References target address endpoint key value position explicitly inside database path tree structure
        firebase.database().ref('/' + this.state.selectedUser.key).remove()
            .then(x => {
                console.log("SUCCESS");
                this.closeDeleteDialog(); // Cleanly exit the confirmation dialogue element interface UI view
            })
            .catch(error => {
                alert("Could not delete the user.");
                console.log("ERROR", error)
            });
    }

    render() {
        // Transforms state item listings directly into interactive native array table element node sequences
        const listUsers = this.state.users.map((user) => (
            <tr key={user.key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                {/* Router Link creates safe target transition configurations using clean URL string schemas */}
                <td><Link to={`/edit/${user.key}`}>Edit</Link></td>
                {/* Uses bound arguments to lock execution reference configurations straight inside the handlers */}
                <td><Button onClick={this.openDeleteDialog.bind(this, user)}>Remove</Button></td>
            </tr>
        ));

        return (
            <div>
                <Button variant="primary" onClick={this.add}>Add</Button>
                
                {/* Structured UI presentation components from the react-bootstrap grid dependency pack */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </Table>

                {/* Confirmation Dialogue Popover Section */}
                <Modal show={this.state.showDeleteDialog} onHide={this.closeDeleteDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete {this.state.selectedUser.username}?</p>
                        <hr />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.delete}>Delete</Button>
                        <Button onClick={this.closeDeleteDialog}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default User;