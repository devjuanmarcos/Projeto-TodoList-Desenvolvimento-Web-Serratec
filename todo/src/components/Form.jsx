import { Button, TextField } from '@mui/material';
import React from 'react';

export default function Form(){
    return(
        <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="text">Adicionar</Button>
        </div>
    );
}