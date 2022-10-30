import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

export default function TodoItem() {

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <DeleteSweepIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple/>
        </ListItemIcon>
        <ListItemText primary={'Line item '}/>
      </ListItemButton>
    </ListItem>
  );
}

