import React from 'react';
import ons from '../../core/Ons';
import { useNavigate } from "react-router-dom";
import { useClick, useClickRouter } from "../../core/Hooks";

// start -- MUI 
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
// end -- MUI

const MasterList = () => {
    const navigate = useNavigate();
    
    const onClick = (path: string) => {
        return (event: React.MouseEvent) => {
            navigate('/' + path);
            ons.route(path)
        }
    }
    return (
        <React.Fragment>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders"  onClick={onClick('')}/>
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
            <ListItemText primary="Reports" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
            <ListItemText primary="Integrations" />
            </ListItemButton>
        </React.Fragment>
    )
}

export default MasterList;