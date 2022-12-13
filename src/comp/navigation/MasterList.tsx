import React from 'react';
import ons from '../../core/Ons';
import { useNavigate } from "react-router-dom";
import { useClick, useClickRouter } from "../../core/Hooks";

// start -- MUI 
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';
// end -- MUI

const MasterList = () => {
    const navigate = useNavigate();
    
    const onClick = (path: string) => {
        return (e: React.MouseEvent) => {
            navigate('/' + path);
            ons.route(path)
        }
    }
    return (
        <React.Fragment>
            <ListItemButton onClick={onClick('')}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard"  onClick={onClick('')}/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Attendance"  onClick={onClick('attendance')}/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                    <ListItemText primary="Customers" onClick={onClick('customers')}/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                    <ListItemText primary="Reports" onClick={onClick('reports')}/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" onClick={onClick('settings')}/>
            </ListItemButton>
        </React.Fragment>
    )
}

export default MasterList;