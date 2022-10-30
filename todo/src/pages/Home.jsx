import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';

export default function Home() {
    const [todos, setTodos] = useState([1, 2]);

    return (
        <Container maxWidth="xs" style={{ marginTop: "lem" }}>
            <Form />
            <List sx={{marginTop: "lem" }}>
                {todos.map((todo) => (
                    <div style={{ marginTop: "lem" }}>
                        < TodoItem />
                    </div>

                ))}
            </List>
        </Container>
    );
}