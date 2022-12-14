import * as React from 'react';

// start -- MUI 
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
// end -- MUI

const SubList = () => {
  return (
    <React.Fragment>
        <ListSubheader component="div" inset>
        Saved reports
        </ListSubheader>
        <ListItemButton>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
  )
}

export default SubList;
