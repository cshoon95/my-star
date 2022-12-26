import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, showAlert, showLoading, hideLoading, movePage } from "../../store/View";
import { StoreStateType } from '../../type/Type';
import ons from '../../core/Ons';
import SpeedDialog from "../module/SpeedDialog";

// start -- MUI 
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// end -- MUI

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const Header = (open: any) => {
    const { isShownDrawer, drawerWidth, headerTitle, pageName } = useSelector(
        (state: StoreStateType) => {
            return {
                isShownDrawer: state.view.isShownDrawer,
                drawerWidth: state.view.drawerWidth,
                headerTitle: state.view.headerTitle,
                pageName: state.view.pageName
            }
        }
    )

    const StyledAppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    }));

    return(
        <StyledAppBar position="absolute" open={isShownDrawer}>
             <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }} 
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => {
                        isShownDrawer ? ons.hideDrawer() : ons.showDrawer();
                    }}
                    sx={{
                        marginRight: '36px',
                        ...(isShownDrawer && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    {headerTitle}
                </Typography>
                {pageName === 'Customers' ? <SpeedDialog /> : ''}
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;