import React from 'react';
import ons from '../../core/Ons';
import util from '../../core/Utils';
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
        const currPage = ons.getState('pageName', 'view');

        if (currPage === util.replaceToUpperCaseFirst(path)) return;
        
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
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={onClick('attendance')}>
                <ListItemIcon>
                    <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Attendance" />
            </ListItemButton>
            <ListItemButton onClick={onClick('customers')}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                    <ListItemText primary="Customers" />
            </ListItemButton>
            <ListItemButton onClick={onClick('reports')}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                    <ListItemText primary="Reports" />
            </ListItemButton>
            <ListItemButton onClick={onClick('setting')}>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" />
            </ListItemButton>
        </React.Fragment>
    )
}

export default MasterList;