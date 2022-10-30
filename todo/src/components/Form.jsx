import { Button, Paper, TextField } from '@mui/material';
import React, { useState } from "react";

export default function Form({todoHandler}) {
    const [text, setText] = useState(null);

    return (
        <Paper style={{ padding: "lem" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField id="outlined-basic"
                    label="Tarefa"
                    variant="outlined"
                    onChange={(e) => setText(e.target.value)}
                    fullWidth
                />
                <Button variant="text" onClick={() => todoHandler(text)}>
                    Adicionar
                </Button>
            </div>
        </Paper>
    );
}