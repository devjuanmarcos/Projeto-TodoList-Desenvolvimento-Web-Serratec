import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function EditTodoDialog({ open, dialogHandler, todo }) {
 
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={dialogHandler}
            aria-describedby="alert-dialog-slide-description"
            fullWidth
        >
            <DialogTitle>{"Editando tarefa"}</DialogTitle>
            <DialogContent>
                <TextField defaultValue={todo.text} fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={dialogHandler}>Cancelar</Button>
                <Button >Ok</Button>
            </DialogActions>
        </Dialog>

    );
}