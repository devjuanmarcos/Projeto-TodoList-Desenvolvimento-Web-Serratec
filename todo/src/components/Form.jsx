import { Button, Paper, TextField } from '@mui/material';
import React from 'react';

export default function Form() {
    return (
        <Paper style={{ padding: "lem" }}>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <TextField id="outlined-basic" label="Tarefa" variant="outlined" fullWidth/>
                <Button variant="text">Adicionar</Button>
            </div>
        </Paper>
    );
}