import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';

export default function Home() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    }

    const editTodo = (id, editedText) => {
        var todosArray = [...todos];
        for (var i in todosArray){
            if(todosArray[i].id === id){
                todosArray[i].text = editedText;
            }
        }
       
    }

    return (
        <Container maxWidth="xs" style={{ marginTop: "lem" }}>
            <Form addTodo={addTodo} />
            <List sx={{ marginTop: "lem" }}>
                {todos.map((todo) => (
                    <div key={todo.id} style={{ marginTop: "lem" }}>
                        < TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
                    </div>

                ))}
            </List>
        </Container>
    );
}