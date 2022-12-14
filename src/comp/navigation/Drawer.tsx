import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MasterList from './MasterList';
import SubList from './SubList';
import { StoreStateType } from '../../type/Type';
import ons from "../../core/Ons";

// start -- MUI 
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// end -- MUI

const Drawer = () => {
    const { isShownDrawer, drawerWidth } = useSelector(
        (state: StoreStateType) => {
            return {
              isShownDrawer: state.view.isShownDrawer,
              drawerWidth: state.view.drawerWidth
            };
        },
    );

    const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme }) => ({
        '& .MuiDrawer-paper': {
          position: 'relative',
          whiteSpace: 'nowrap',
          width: drawerWidth,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          boxSizing: 'border-box',
          ...(!isShownDrawer && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
              width: theme.spacing(9),
            },
          }),
        },
      }),
    );

    return (
        <StyledDrawer variant="permanent" open={isShownDrawer}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={() => {
                    isShownDrawer ? ons.hideDrawer() : ons.showDrawer();
                }}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <MasterList/>
                <Divider sx={{ my: 1 }} />
                <SubList/>
            </List>
        </StyledDrawer>
    )
}

export default Drawer;