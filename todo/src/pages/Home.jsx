import { Container, List  } from '@mui/material';
import React from 'react';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';

export default function Home() {
    return (
        <Container maxWidth="xs" style={{ marginTop: "lem" }}>
            <Form />
            <List sx={{ width: '100%', bgcolor: 'background.paper', marginTop: "lem" }}>
                <TodoItem />
            </List>
        </Container>
    );
}