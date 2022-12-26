import React from 'react';
import ons from "../../core/Ons";

// start -- MUI 
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import SearchIcon from '@mui/icons-material/PersonSearch';
import AddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/PersonOff';
// end -- MUI

const actions = [
    { icon: <AddAlt1Icon />, name: 'Add' },
    { icon: <DeleteIcon />, name: 'Delete' },
    { icon: <SearchIcon />, name: 'Search' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

const SpeedDialog = () => {
    return (
        <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{ position: 'absolute', bottom: -500, right: 32}}
            icon={<SpeedDialIcon openIcon={<AddIcon />} />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={(e) => { ons.showPopup('EditCustomers'); }}
                />
            ))}
        </SpeedDial>
    );
}

export default SpeedDialog;