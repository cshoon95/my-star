import React from 'react';
import ons from '../../core/Ons';
import util from '../../core/Utils';
import { useNavigate } from "react-router-dom";
// import { useClick, useClickRouter } from "../../core/Hooks";

// start -- MUI 
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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

    const listItem= [
        { page: '', icon: <DashboardIcon />},
        { page: 'Attendance', icon: <CreateIcon />},
        { page: 'Calendar', icon: <CalendarMonthIcon />},
        { page: 'Customers', icon: <PeopleIcon />},
        { page: 'Reports', icon: <BarChartIcon />},
        { page: 'Setting', icon: <SettingsIcon />}
    ]

    return (
        <React.Fragment>
            {listItem.map((el: { page: string; icon: JSX.Element }) => {
                return <ListItemButton onClick={onClick(el.page)}>
                            <ListItemIcon>
                                {el.icon}
                            </ListItemIcon>
                            <ListItemText primary={el.page === '' ? 'Dashboard' : el.page} />
                        </ListItemButton>
            })}
        </React.Fragment>
    )
}

export default MasterList;