import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';

export default function Home() {
    const [todos, setTodos] = useState([]);

    const todoHandler = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: "lem" }}>
            <Form todoHandler={todoHandler} />
            <List sx={{ marginTop: "lem" }}>
                {todos.map((todo) => (
                    <div key={todo.id} style={{ marginTop: "lem" }}>
                        < TodoItem todo={todo} />
                    </div>

                ))}
            </List>
        </Container>
    );
}